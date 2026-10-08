import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { ExamResult } from "../types";
import { Award, Printer, X, Sparkles, CheckCircle2 } from "lucide-react";

interface Props {
  result: ExamResult;
  onClose: () => void;
}

export const CertificateModal: React.FC<Props> = ({ result, onClose }) => {
  useEffect(() => {
    // Fire festive confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-amber-50 border-8 border-amber-600 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 text-center border-double">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-amber-200 hover:bg-amber-300 text-amber-900 p-2 rounded-full font-bold transition-all print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Traditional Scroll Border Header */}
        <div className="space-y-2">
          <div className="text-4xl">🌸 📜 🌸</div>
          <div className="text-amber-800 font-serif font-black text-xs uppercase tracking-widest border-b-2 border-amber-300 pb-1 inline-block">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </div>
          <div className="text-[10px] text-amber-700 italic">Độc lập - Tự do - Hạnh phúc</div>
        </div>

        {/* Main Certificate Title */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-amber-900 tracking-tight uppercase">
            GIẤY KHEN TRẠNG NGUYÊN TIẾNG VIỆT
          </h2>
          <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">
            HỌC SINH GIỎI TIẾNG VIỆT LỚP 2 • CHƯƠNG TRÌNH GDPT 2018
          </p>
        </div>

        {/* Certificate Body */}
        <div className="bg-white/80 border-2 border-amber-300 rounded-2xl p-6 shadow-inner space-y-3 font-serif">
          <p className="text-sm text-amber-950">Chứng nhận em học sinh:</p>

          <div className="text-2xl sm:text-3xl font-black text-red-700 tracking-wide underline decoration-amber-400">
            {result.studentName || "Học Sinh Trạng Nguyên"}
          </div>

          <div className="text-sm text-amber-900 font-bold flex flex-wrap items-center justify-center gap-4">
            <span>
              Lớp: <strong className="text-amber-950 font-black">{result.className || "2A"}</strong>
            </span>
            <span>•</span>
            <span>
              Trường: <strong className="text-amber-950 font-black">{result.schoolName || "Tiểu Học"}</strong>
            </span>
          </div>

          <p className="text-xs text-amber-800 leading-relaxed pt-2">
            Đã hoàn thành xuất sắc bài thi Trạng Nguyên Tiếng Việt Lớp 2 với kết quả vượt trội:
          </p>

          {/* Score & Award Badge */}
          <div className="py-2 flex flex-wrap items-center justify-center gap-3">
            <div className="bg-amber-100 border border-amber-400 px-4 py-2 rounded-2xl">
              <span className="text-xs text-amber-800 block font-sans font-bold">Điểm số đạt được</span>
              <span className="text-2xl font-black text-amber-950 font-sans">
                {result.score} / {result.maxScore} điểm
              </span>
            </div>

            <div className="bg-red-100 border border-red-400 px-4 py-2 rounded-2xl">
              <span className="text-xs text-red-800 block font-sans font-bold">Danh hiệu trao tặng</span>
              <span className="text-xl font-black text-red-700 font-serif flex items-center gap-1 justify-center">
                <span>🏆</span>
                <span>{result.titleAwarded}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer date & Stamp */}
        <div className="flex justify-between items-end text-xs font-serif text-amber-900 pt-2 px-4">
          <div className="text-left space-y-1">
            <p className="italic">Chấm điểm tự động</p>
            <p className="font-bold">Hệ thống Trạng Nguyên AI</p>
          </div>

          <div className="text-center space-y-1">
            <p className="italic">Ngày {result.date}</p>
            <p className="font-bold uppercase text-red-800">BAN GIÁM HIỆU & HỘI ĐỒNG THI</p>
            <div className="w-16 h-16 mx-auto my-1 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 font-bold text-[10px] transform -rotate-12 border-dashed">
              ĐÃ XÁC NHẬN
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex items-center justify-center gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl font-bold text-sm bg-amber-600 hover:bg-amber-700 text-white shadow-md active:scale-95 transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>In Giấy Khen</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-200 hover:bg-slate-300 text-slate-800 transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
