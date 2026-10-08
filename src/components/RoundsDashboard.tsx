import React, { useState } from "react";
import { EXAM_ROUNDS } from "../data/curriculumData";
import { StudentProfile, ExamRound } from "../types";
import { soundFX } from "../utils/audioEffects";
import { BookOpen, Sparkles, Star, Trophy, Play, CheckCircle2, Award } from "lucide-react";

interface Props {
  profile: StudentProfile;
  onSelectRound: (round: ExamRound, isExam: boolean) => void;
}

export const RoundsDashboard: React.FC<Props> = ({ profile, onSelectRound }) => {
  const [semesterFilter, setSemesterFilter] = useState<"ALL" | "HK1" | "HK2">("ALL");

  const filteredRounds = EXAM_ROUNDS.filter((r) => {
    if (semesterFilter === "HK1") return r.semester === "HK1";
    if (semesterFilter === "HK2") return r.semester === "HK2";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in pb-16">
      {/* Hero Welcome Card */}
      <div className="bg-[#FF8C42] rounded-2xl p-6 sm:p-8 text-white shadow-md border-b-4 border-[#E07026] relative overflow-hidden">
        <div className="absolute right-4 bottom-0 text-9xl opacity-15 font-serif">📚</div>
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#FFB17A] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD93D]" />
            <span>Chương Trình GDPT 2018</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Lộ Trình Ôn Luyện Trạng Nguyên Tiếng Việt 2
          </h2>
          <p className="text-xs sm:text-sm text-amber-50 leading-relaxed font-medium">
            Gồm 19 Vòng thi xuyên suốt từ Tuần 1 đến Tuần 35 (Học kỳ I & II). Đa dạng bài tập: Mèo con nhanh trí, Hổ con thiên tài, Trâu vàng bác học, Điền từ, Giải đố vui & Đọc hiểu!
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                soundFX.playClick();
                // Pick round 1 or first uncompleted round
                const nextRound = EXAM_ROUNDS.find((r) => !profile.completedRounds[r.id]) || EXAM_ROUNDS[0];
                onSelectRound(nextRound, true);
              }}
              className="px-6 py-3 bg-white hover:bg-amber-50 text-[#FF8C42] font-black text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <Play className="w-4 h-4 fill-[#FF8C42]" />
              <span>🚀 BẮT ĐẦU LÀM BÀI VÒNG {EXAM_ROUNDS.find((r) => !profile.completedRounds[r.id])?.id || 1} NGAY</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress overview bar from design theme */}
      <div className="bg-white p-4 rounded-2xl border-2 border-[#F0E6D2] shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFD93D]/30 rounded-xl flex items-center justify-center text-xl text-[#FF8C42]">
            ⭐
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-slate-500">Tiến Độ Hoàn Thành</div>
            <div className="text-sm font-black text-slate-800">
              {Object.keys(profile.completedRounds).length} / 19 Vòng Đã Đạt
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <div className="w-full bg-[#F0E6D2] rounded-full h-3.5 overflow-hidden p-0.5">
            <div
              className="bg-[#FFD93D] h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.round((Object.keys(profile.completedRounds).length / 19) * 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="text-xs font-black text-[#FF8C42] bg-[#FFF9E6] px-3 py-1.5 rounded-full border border-[#FFD93D]">
          {Math.round((Object.keys(profile.completedRounds).length / 19) * 100)}% Hoàn thành
        </div>
      </div>

      {/* Semester Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#E6E6E6] pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick();
              setSemesterFilter("ALL");
            }}
            className={`px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all ${
              semesterFilter === "ALL"
                ? "bg-[#FF8C42] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-[#E6E6E6]"
            }`}
          >
            Tất Cả (19 Vòng)
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setSemesterFilter("HK1");
            }}
            className={`px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all ${
              semesterFilter === "HK1"
                ? "bg-[#FF6B6B] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-[#E6E6E6]"
            }`}
          >
            Học Kỳ I (Vòng 1 - 10)
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setSemesterFilter("HK2");
            }}
            className={`px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all ${
              semesterFilter === "HK2"
                ? "bg-[#4ECDC4] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-[#E6E6E6]"
            }`}
          >
            Học Kỳ II (Vòng 11 - 19)
          </button>
        </div>

        <div className="text-xs text-slate-500 font-bold bg-white px-3 py-1.5 rounded-full border border-[#E6E6E6]">
          Hiển thị: <strong className="text-[#FF8C42]">{filteredRounds.length}</strong> vòng thi
        </div>
      </div>

      {/* Rounds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredRounds.map((round) => {
          const completedData = profile.completedRounds[round.id];
          const isCompleted = !!completedData;

          // Vibrant Palette difficulty bottom border styling
          let borderStyle = "border-b-4 border-[#4ECDC4]";
          if (round.difficulty === "trung-bình") borderStyle = "border-b-4 border-[#FFD93D]";
          if (round.difficulty === "khó") borderStyle = "border-b-4 border-[#FF6B6B]";

          return (
            <div
              key={round.id}
              className={`bg-white rounded-2xl p-5 shadow-sm transition-all flex flex-col justify-between space-y-4 hover:shadow-md ${borderStyle}`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase text-[#FF8C42] bg-[#FFF9E6] px-2.5 py-0.5 rounded-full border border-[#FFD93D]">
                    Vòng {round.id} • {round.semester}
                  </span>

                  <span
                    className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                      round.difficulty === "dễ"
                        ? "bg-emerald-100 text-emerald-700"
                        : round.difficulty === "trung-bình"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {round.difficulty}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-800 text-base leading-snug">
                  {round.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Chủ đề: <strong className="text-slate-700">{round.topic}</strong>
                </p>

                {/* Question parts tag */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {round.parts.map((p, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] bg-[#FFF9E6] text-amber-900 font-bold px-2 py-0.5 rounded-md border border-[#F0E6D2]"
                    >
                      {p.partName.split(":")[0]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status and Action buttons */}
              <div className="pt-3 border-t border-[#F0E6D2] space-y-2.5">
                {isCompleted && (
                  <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-xl text-xs text-emerald-900 font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đã đạt: {completedData.score} / {completedData.maxScore} đ</span>
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-black">⭐ +10</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onSelectRound(round, false);
                    }}
                    className="py-2 px-3 bg-[#4ECDC4] hover:bg-[#45B7AF] text-white font-bold text-xs rounded-full shadow-sm transition-all flex items-center justify-center gap-1 active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>LUYỆN TẬP</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onSelectRound(round, true);
                    }}
                    className="py-2 px-3 bg-[#FF8C42] hover:bg-[#E07026] text-white font-bold text-xs rounded-full shadow-sm transition-all flex items-center justify-center gap-1 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>THI THỬ</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus tip box from Design Theme */}
      <div className="bg-[#4ECDC4]/15 p-4 rounded-2xl border-2 border-[#4ECDC4] flex items-center gap-4">
        <div className="text-3xl">💡</div>
        <div>
          <p className="text-sm font-black text-[#2C7A74]">Mẹo ôn tập Trạng Nguyên:</p>
          <p className="text-xs text-[#2C7A74] font-medium opacity-90">
            Hãy làm các bài tập "Dễ" trước để tích lũy Ngôi Sao và mở khóa đầy đủ danh hiệu Trạng Nguyên Bảng Vàng nhé!
          </p>
        </div>
      </div>
    </div>
  );
};
