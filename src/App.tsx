import React, { useState, useEffect } from "react";
import { StudentProfile, ExamRound, ExamResult } from "./types";
import { EXAM_ROUNDS } from "./data/curriculumData";
import { Header } from "./components/Header";
import { RoundsDashboard } from "./components/RoundsDashboard";
import { ExamMode } from "./components/ExamMode";
import { ScoreboardView } from "./components/ScoreboardView";
import { AITutorModal } from "./components/AITutorModal";
import { StudentProfileModal } from "./components/StudentProfileModal";
import { CertificateModal } from "./components/CertificateModal";
import { soundFX } from "./utils/audioEffects";

const LOCAL_STORAGE_KEY = "trang_nguyen_lop2_profile";
const HISTORY_STORAGE_KEY = "trang_nguyen_lop2_history";

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return {
      name: "",
      className: "",
      schoolName: "",
      avatar: "mascot_trangnguyen",
      stars: 50, // Initial welcome gift stars!
      totalScore: 0,
      completedRounds: {},
    };
  });

  const [examHistory, setExamHistory] = useState<ExamResult[]>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return [];
  });

  const [activeTab, setActiveTab] = useState<"rounds" | "exam" | "scoreboard" | "aitutor">("rounds");
  const [selectedRound, setSelectedRound] = useState<ExamRound | null>(null);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isFirstTimeSetup, setIsFirstTimeSetup] = useState<boolean>(false);

  const [activeCertificate, setActiveCertificate] = useState<ExamResult | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Check if initial profile is empty
  useEffect(() => {
    if (!profile.name || !profile.className || !profile.schoolName) {
      setIsFirstTimeSetup(true);
      setIsProfileModalOpen(true);
    }
  }, []);

  // Save profile to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {}
  }, [profile]);

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(examHistory));
    } catch (e) {}
  }, [examHistory]);

  const handleSaveProfile = (updated: Partial<StudentProfile>) => {
    setProfile((prev) => ({
      ...prev,
      ...updated,
    }));
    setIsProfileModalOpen(false);
    setIsFirstTimeSetup(false);
  };

  const handleSelectRound = (round: ExamRound, isExam: boolean) => {
    setSelectedRound(round);
    setIsExamMode(isExam);
    setActiveTab("exam");
  };

  const handleFinishExam = (result: ExamResult) => {
    // Award 10 stars for completion
    const newStars = profile.stars + 10;
    const updatedCompletedRounds = {
      ...profile.completedRounds,
      [result.roundId]: {
        score: result.score,
        maxScore: result.maxScore,
        date: result.date,
        timeSpentSeconds: result.timeSpentSeconds,
      },
    };

    setProfile((prev) => ({
      ...prev,
      stars: newStars,
      totalScore: prev.totalScore + result.score,
      completedRounds: updatedCompletedRounds,
    }));

    setExamHistory((prev) => [result, ...prev]);

    // Show certificate modal
    setActiveCertificate(result);
  };

  const handleToggleMute = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-[#FFF9E6] text-slate-800 flex flex-col font-sans selection:bg-[#FFD93D]/50">
      {/* Navigation Header */}
      <Header
        profile={profile}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab !== "exam") setSelectedRound(null);
          setActiveTab(tab);
        }}
        onEditProfile={() => {
          soundFX.playClick();
          setIsProfileModalOpen(true);
        }}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {activeTab === "rounds" && (
          <RoundsDashboard
            profile={profile}
            onSelectRound={handleSelectRound}
          />
        )}

        {activeTab === "exam" && selectedRound ? (
          <ExamMode
            round={selectedRound}
            profile={profile}
            isExamMode={isExamMode}
            onFinishExam={handleFinishExam}
            onBackToRounds={() => {
              setSelectedRound(null);
              setActiveTab("rounds");
            }}
          />
        ) : activeTab === "exam" && !selectedRound ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-3 shadow-sm">
            <div className="text-5xl">📖</div>
            <h3 className="font-extrabold text-slate-800 text-lg">Em chưa chọn vòng thi nào!</h3>
            <p className="text-xs text-slate-500">Hãy chọn 1 trong 19 Vòng Luyện Tập để bắt đầu làm bài nhé.</p>
            <button
              onClick={() => setActiveTab("rounds")}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95"
            >
              Xem Danh Sách 19 Vòng Thi
            </button>
          </div>
        ) : null}

        {activeTab === "scoreboard" && (
          <ScoreboardView
            profile={profile}
            examHistory={examHistory}
            onOpenCertificate={(res) => setActiveCertificate(res)}
            onStartRound={(rId) => {
              const r = EXAM_ROUNDS.find((x) => x.id === rId) || EXAM_ROUNDS[0];
              handleSelectRound(r, true);
            }}
          />
        )}

        {activeTab === "aitutor" && <AITutorModal studentName={profile.name} />}
      </main>

      {/* Footer */}
      <footer className="bg-[#FF8C42] text-white text-xs py-6 border-t-4 border-[#FF7020] text-center space-y-1 shadow-inner">
        <p className="font-black text-amber-100 uppercase tracking-wide">
          Ứng Dụng Ôn Luyện Trạng Nguyên Tiếng Việt Lớp 2 (GDPT 2018)
        </p>
        <p className="text-[11px] text-white/80">
          Chương trình Tiếng Việt Tiểu Học • Học Kỳ I & II (Vòng 1 - Vòng 19)
        </p>
      </footer>

      {/* Student Profile Input Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        profile={profile}
        onSave={handleSaveProfile}
        onClose={() => setIsProfileModalOpen(false)}
        isFirstTime={isFirstTimeSetup}
      />

      {/* Certificate Modal */}
      {activeCertificate && (
        <CertificateModal
          result={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </div>
  );
}
