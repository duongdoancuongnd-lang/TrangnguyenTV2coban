import React, { useState } from "react";
import { StudentProfile } from "../types";
import { soundFX } from "../utils/audioEffects";
import { User, School, BookOpen, Sparkles, Check, Award } from "lucide-react";

interface Props {
  profile: StudentProfile;
  onSave: (updated: Partial<StudentProfile>) => void;
  onClose?: () => void;
  isOpen: boolean;
  isFirstTime?: boolean;
}

const MASCOTS = [
  { id: "mascot_trangnguyen", name: "Bé Trạng Nguyên", icon: "👨‍🎓", color: "from-amber-400 to-amber-600" },
  { id: "mascot_cat", name: "Chú Mèo Nhanh Trí", icon: "🐱", color: "from-orange-400 to-amber-500" },
  { id: "mascot_tiger", name: "Chú Hổ Thiên Tài", icon: "🐯", color: "from-red-400 to-orange-500" },
  { id: "mascot_buffalo", name: "Chú Trâu Bác Học", icon: "🐃", color: "from-emerald-400 to-teal-600" },
];

export const StudentProfileModal: React.FC<Props> = ({
  profile,
  onSave,
  onClose,
  isOpen,
  isFirstTime = false,
}) => {
  const [name, setName] = useState<string>(profile.name || "");
  const [className, setClassName] = useState<string>(profile.className || "");
  const [schoolName, setSchoolName] = useState<string>(profile.schoolName || "");
  const [avatar, setAvatar] = useState<string>(profile.avatar || "mascot_trangnguyen");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    soundFX.playCorrect();
    onSave({
      name: name.trim(),
      className: className.trim() || "Lớp 2A",
      schoolName: schoolName.trim() || "Trường Tiểu Học",
      avatar,
    });
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border-b-4 border-[#FF8C42] max-w-lg w-full overflow-hidden transform transition-all">
        {/* Modal Banner */}
        <div className="bg-[#FF8C42] p-6 text-white text-center relative">
          <div className="absolute top-2 right-3 text-4xl opacity-20">🌸</div>
          <div className="inline-block bg-white/20 backdrop-blur-md p-3 rounded-2xl mb-2">
            <span className="text-4xl">🎓</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight">
            {isFirstTime ? "Chào Mừng Bé Đến Với Trạng Nguyên!" : "Thông Tin Học Sinh"}
          </h2>
          <p className="text-xs text-amber-50 mt-1 font-medium">
            Điền đầy đủ thông tin để hiển thị trên Bảng Điểm & Giấy Khen Trạng Nguyên Lớp 2
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Mascot Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Chọn Linh Vật Của Em:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {MASCOTS.map((m) => {
                const isSelected = avatar === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      soundFX.playClick();
                      setAvatar(m.id);
                    }}
                    className={`p-2.5 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all ${
                      isSelected
                        ? "bg-[#FFF9E6] border-[#FF8C42] ring-2 ring-[#FFD93D] scale-105"
                        : "bg-white border-[#F0E6D2] hover:bg-[#FFF9E6]"
                    }`}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="text-[10px] font-extrabold text-slate-800 text-center leading-tight">
                      {m.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Student Name */}
          <div className="space-y-1">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#FF8C42]" />
              <span>Họ và Tên Học Sinh <span className="text-red-500">*</span></span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn An"
              className="w-full px-4 py-2.5 rounded-xl border-2 border-[#F0E6D2] focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/20 font-bold text-slate-800 text-sm focus:outline-none"
            />
          </div>

          {/* Class Name & School Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#FF8C42]" />
                <span>Lớp Học <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                required
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Ví dụ: Lớp 2A1"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#F0E6D2] focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/20 font-bold text-slate-800 text-sm focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <School className="w-4 h-4 text-[#FF8C42]" />
                <span>Trường Tiểu Học <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                required
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="Ví dụ: Tiểu Học Kim Đồng"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#F0E6D2] focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/20 font-bold text-slate-800 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#F0E6D2]">
            {!isFirstTime && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full font-bold text-sm text-slate-600 hover:bg-slate-100 transition-all"
              >
                Đóng
              </button>
            )}
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full font-bold text-sm bg-[#FF8C42] hover:bg-[#E07026] text-white shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{isFirstTime ? "Bắt Đầu Ôn Luyện!" : "Lưu Thông Tin"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
