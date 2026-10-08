import React, { useState } from "react";
import { FillBlanksQuestion } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { Check, HelpCircle, Sparkles } from "lucide-react";

interface Props {
  question: FillBlanksQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const FillBlanksEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [userVal, setUserVal] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [showHint, setShowHint] = useState<boolean>(false);

  const normalize = (str: string) => str.trim().toLowerCase();

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (disabled || !userVal.trim() || status === "correct") return;

    if (normalize(userVal) === normalize(question.correctAnswer)) {
      soundFX.playCorrect();
      soundFX.playVictory();
      setStatus("correct");
      onComplete(true, 100);
    } else {
      soundFX.playWrong();
      setStatus("incorrect");
      onComplete(false, 0);
    }
  };

  return (
    <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✍️</span>
          <div>
            <h3 className="font-bold text-blue-950 text-lg">Điền Chữ/Từ Còn Thiếu</h3>
            <p className="text-xs text-blue-800">Điền từ hoặc chữ chính xác vào ô trống</p>
          </div>
        </div>
        {question.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-100 hover:bg-blue-200 px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? "Ẩn gợi ý" : "Gợi ý"}</span>
          </button>
        )}
      </div>

      {showHint && question.hint && (
        <div className="bg-amber-100/90 border border-amber-300 rounded-xl p-3 text-xs text-amber-900 animate-fade-in">
          <strong>💡 Gợi ý:</strong> {question.hint}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm leading-relaxed text-base text-slate-800 font-medium">
          <p>{question.question}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            value={userVal}
            onChange={(e) => {
              setUserVal(e.target.value);
              setStatus("idle");
            }}
            disabled={disabled || status === "correct"}
            placeholder="Nhập từ hoặc chữ điền vào đây..."
            className={`flex-1 min-w-[200px] px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none ${
              status === "correct"
                ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold"
                : status === "incorrect"
                ? "bg-red-50 border-red-400 text-red-900"
                : "bg-white border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
          />

          <button
            type="submit"
            disabled={!userVal.trim() || disabled || status === "correct"}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow ${
              status === "correct"
                ? "bg-emerald-600 text-white cursor-default"
                : !userVal.trim()
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-200"
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{status === "correct" ? "Chính Xác!" : "Nộp Đáp Án"}</span>
          </button>
        </div>
      </form>

      {status === "incorrect" && (
        <div className="text-red-600 font-bold text-xs bg-red-50 border border-red-200 p-2.5 rounded-xl animate-bounce">
          Chưa đúng rồi! Em hãy suy nghĩ kĩ lại hoặc kiểm tra gợi ý nhé!
        </div>
      )}

      {status === "correct" && (
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-3.5 text-xs text-emerald-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-emerald-800 text-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Xuất Sắc! Điền Từ Đúng Rồi!</span>
          </div>
          <p>
            <strong>Đáp án chính xác:</strong> "{question.correctAnswer}"
          </p>
          {question.explanation && <p className="italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
};
