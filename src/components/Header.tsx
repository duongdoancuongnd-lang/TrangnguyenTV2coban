import React from "react";
import { StudentProfile } from "../types";
import { soundFX } from "../utils/audioEffects";
import {
  Award,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  UserEdit,
  Trophy,
  Bot,
  Star,
  GraduationCap,
} from "lucide-react";

interface Props {
  profile: StudentProfile;
  activeTab: "rounds" | "exam" | "scoreboard" | "aitutor";
  setActiveTab: (tab: "rounds" | "exam" | "scoreboard" | "aitutor") => void;
  onEditProfile: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

const MASCOT_ICONS: Record<string, string> = {
  mascot_trangnguyen: "👨‍🎓",
  mascot_cat: "🐱",
  mascot_tiger: "🐯",
  mascot_buffalo: "🐃",
};

export const Header: React.FC<Props> = ({
  profile,
  activeTab,
  setActiveTab,
  onEditProfile,
  isMuted,
  onToggleMute,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FF8C42] text-white shadow-lg border-b-4 border-[#E07026]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab("rounds")}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-black text-[#FF8C42] shadow-md transform -rotate-3 hover:rotate-0 transition-all border-2 border-white">
              TN
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="bg-[#FFB17A] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/30">
                  GDPT 2018
                </span>
                <span className="text-white/90 text-xs font-bold">Lớp 2</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-sm leading-none mt-0.5">
                Trạng Nguyên Tiếng Việt 2
              </h1>
            </div>
          </div>

          {/* Student Info Card */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onEditProfile}
              className="bg-[#FFB17A] hover:bg-[#FF9E5E] active:scale-95 text-white px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm flex items-center gap-2.5 text-xs transition-all font-bold"
            >
              <span className="text-xl">{MASCOT_ICONS[profile.avatar] || "👨‍🎓"}</span>
              <div className="text-left">
                <div className="font-black text-white leading-tight">
                  {profile.name || "Chưa nhập tên"}
                </div>
                <div className="text-[10px] text-amber-100 font-semibold">
                  {profile.className || "Lớp 2A"} • {profile.schoolName || "Chưa nhập trường"}
                </div>
              </div>
              <span className="bg-white/20 p-1 rounded-full text-white hover:bg-white/30">
                ✎
              </span>
            </button>

            {/* Stars counter */}
            <div className="bg-[#FFB17A] px-4 py-1.5 rounded-full border border-white/40 flex items-center gap-1.5 font-black text-white text-xs shadow-sm">
              <Star className="w-4 h-4 fill-[#FFD93D] text-[#FFD93D]" />
              <span>{profile.stars} Ngôi Sao</span>
            </div>

            {/* Sound toggle */}
            <button
              onClick={onToggleMute}
              className="p-2 rounded-full bg-[#FFB17A] hover:bg-[#FF9E5E] text-white border border-white/40 transition-all active:scale-95"
              title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-white/20 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("rounds")}
            className={`px-4 py-2 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "rounds"
                ? "bg-white text-[#FF8C42] shadow-md scale-[1.02]"
                : "bg-[#FFB17A]/80 hover:bg-[#FFB17A] text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>19 Vòng Luyện Tập</span>
          </button>

          <button
            onClick={() => setActiveTab("exam")}
            className={`px-4 py-2 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "exam"
                ? "bg-white text-[#FF8C42] shadow-md scale-[1.02]"
                : "bg-[#FFB17A]/80 hover:bg-[#FFB17A] text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Thi Thử Trạng Nguyên</span>
          </button>

          <button
            onClick={() => setActiveTab("scoreboard")}
            className={`px-4 py-2 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "scoreboard"
                ? "bg-white text-[#FF8C42] shadow-md scale-[1.02]"
                : "bg-[#FFB17A]/80 hover:bg-[#FFB17A] text-white"
            }`}
          >
            <Trophy className="w-4 h-4 text-[#FFD93D]" />
            <span>Bảng Vàng & Giấy Khen</span>
          </button>

          <button
            onClick={() => setActiveTab("aitutor")}
            className={`px-4 py-2 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "aitutor"
                ? "bg-[#4ECDC4] text-white shadow-md scale-[1.02]"
                : "bg-[#FFB17A]/80 hover:bg-[#FFB17A] text-white"
            }`}
          >
            <Bot className="w-4 h-4 text-[#FFD93D]" />
            <span>Thầy Đồ AI Trợ Lý</span>
          </button>
        </div>
      </div>
    </header>
  );
};
