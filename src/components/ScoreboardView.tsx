import React, { useState } from "react";
import { StudentProfile, ExamResult } from "../types";
import { soundFX } from "../utils/audioEffects";
import { Trophy, Award, Star, CheckCircle2, Calendar, Clock, Printer, Sparkles } from "lucide-react";

interface Props {
  profile: StudentProfile;
  examHistory: ExamResult[];
  onOpenCertificate: (result: ExamResult) => void;
  onStartRound: (roundId: number) => void;
}

export const ScoreboardView: React.FC<Props> = ({
  profile,
  examHistory,
  onOpenCertificate,
  onStartRound,
}) => {
  const [filterSemester, setFilterSemester] = useState<"ALL" | "HK1" | "HK2">("ALL");

  const filteredHistory = examHistory.filter((item) => {
    if (filterSemester === "HK1") return item.roundId <= 10;
    if (filterSemester === "HK2") return item.roundId >= 11;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Hero Banner */}
      <div className="bg-[#FF8C42] rounded-2xl p-6 sm:p-8 text-white shadow-md border-b-4 border-[#E07026] relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-15 font-serif">🏆</div>
        <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl shadow-inner border border-white/30">
              🏆
            </div>
            <div>
              <span className="bg-[#FFB17A] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                BẢNG VÀNG TRẠNG NGUYÊN
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {profile.name || "Học Sinh Trạng Nguyên"}
              </h2>
              <p className="text-xs sm:text-sm text-amber-50 mt-0.5 font-medium">
                {profile.className || "Lớp 2A"} • {profile.schoolName || "Trường Tiểu Học"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl text-center min-w-[100px]">
              <span className="text-2xl font-black text-white block">
                {Object.keys(profile.completedRounds).length} / 19
              </span>
              <span className="text-[10px] text-amber-100 font-extrabold uppercase tracking-wider">
                Vòng Đã Qua
              </span>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl text-center min-w-[100px]">
              <span className="text-2xl font-black text-[#FFD93D] block flex items-center justify-center gap-1">
                <span>⭐</span>
                <span>{profile.stars}</span>
              </span>
              <span className="text-[10px] text-amber-100 font-extrabold uppercase tracking-wider">
                Tổng Ngôi Sao
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & History list */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#E6E6E6] pb-3">
          <h3 className="font-black text-slate-800 text-lg flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FF8C42]" />
            <span>Lịch Sử Bài Thi & Giấy Khen Đã Đạt</span>
          </h3>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border-2 border-[#E6E6E6]">
            <button
              onClick={() => {
                soundFX.playClick();
                setFilterSemester("ALL");
              }}
              className={`px-3 py-1 rounded-full font-bold text-xs transition-all ${
                filterSemester === "ALL"
                  ? "bg-[#FF8C42] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tất Cả (19 Vòng)
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setFilterSemester("HK1");
              }}
              className={`px-3 py-1 rounded-full font-bold text-xs transition-all ${
                filterSemester === "HK1"
                  ? "bg-[#FF8C42] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Học Kỳ 1 (1-10)
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setFilterSemester("HK2");
              }}
              className={`px-3 py-1 rounded-full font-bold text-xs transition-all ${
                filterSemester === "HK2"
                  ? "bg-[#FF8C42] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Học Kỳ 2 (11-19)
            </button>
          </div>
        </div>

        {filteredHistory.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-[#F0E6D2] p-8 text-center space-y-3 shadow-sm">
            <div className="text-5xl opacity-40">📜</div>
            <h4 className="font-extrabold text-slate-800 text-base">Chưa có kết quả bài thi nào!</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
              Em hãy tham gia thi thử hoặc hoàn thành các vòng thi luyện tập để nhận Giấy Khen Trạng Nguyên và lưu danh vào Bảng Vàng nhé!
            </p>
            <button
              onClick={() => onStartRound(1)}
              className="px-6 py-2.5 bg-[#FF8C42] hover:bg-[#E07026] text-white font-bold text-xs rounded-full shadow-sm transition-all active:scale-95"
            >
              Làm Vòng Thi Đầu Tiên Ngay!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredHistory.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-[#F0E6D2] border-b-4 border-b-[#FFD93D] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-2 border-b border-[#F0E6D2] pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FF8C42] bg-[#FFF9E6] px-2.5 py-0.5 rounded-full border border-[#FFD93D]">
                      Vòng {item.roundId}
                    </span>
                    <h4 className="font-black text-slate-800 text-base mt-1.5">
                      {item.titleAwarded === "Trạng Nguyên" ? "👑 " : "🏆 "}
                      Danh hiệu {item.titleAwarded}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Học sinh: <strong className="text-slate-800">{item.studentName}</strong> ({item.className})
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-2xl font-black text-[#FF8C42] block">
                      {item.score} <span className="text-xs text-slate-400">/ {item.maxScore} điểm</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF8C42]" />
                    <span>Thời gian: {Math.round(item.timeSpentSeconds / 60)} phút</span>
                  </div>

                  <button
                    onClick={() => onOpenCertificate(item)}
                    className="px-4 py-2 bg-[#4ECDC4] hover:bg-[#45B7AF] text-white font-bold text-xs rounded-full shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Xem Giấy Khen</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
