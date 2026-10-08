import React, { useState } from "react";
import { RiddleQuestion } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { CheckCircle2, Sparkles, XCircle } from "lucide-react";

interface Props {
  question: RiddleQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const RiddleEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (opt: string) => {
    if (disabled || submitted) return;
    soundFX.playClick();
    setSelectedOpt(opt);
    setSubmitted(true);

    const isCorrect = opt === question.correctAnswer;
    if (isCorrect) {
      soundFX.playCorrect();
      soundFX.playVictory();
      onComplete(true, 100);
    } else {
      soundFX.playWrong();
      onComplete(false, 0);
    }
  };

  return (
    <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-purple-200/80 pb-3">
        <span className="text-2xl">🧠</span>
        <div>
          <h3 className="font-bold text-purple-950 text-lg">Giải Đố Vui Trạng Nguyên</h3>
          <p className="text-xs text-purple-800">Đọc kỹ câu đố thơ và chọn câu trả lời đúng</p>
        </div>
      </div>

      {/* Riddle card */}
      <div className="p-5 bg-white rounded-2xl border border-purple-200 shadow-sm text-center">
        <pre className="font-serif italic text-base md:text-lg text-purple-950 whitespace-pre-wrap leading-relaxed">
          {question.riddleText}
        </pre>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selectedOpt === opt;
          const isCorrect = opt === question.correctAnswer;

          let btnStyle =
            "bg-white border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-950 shadow-sm";

          if (submitted) {
            if (isCorrect) {
              btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300";
            } else if (isSelected) {
              btnStyle = "bg-red-100 border-red-500 text-red-950 font-bold ring-2 ring-red-300";
            } else {
              btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(opt)}
              disabled={disabled || submitted}
              className={`p-3.5 rounded-2xl border text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${btnStyle}`}
            >
              <span>{opt}</span>
              {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
              {submitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={`p-4 rounded-xl border text-xs space-y-1 animate-fade-in ${
            selectedOpt === question.correctAnswer
              ? "bg-emerald-100 border-emerald-300 text-emerald-950"
              : "bg-amber-100 border-amber-300 text-amber-950"
          }`}
        >
          <div className="font-bold text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>
              {selectedOpt === question.correctAnswer
                ? "Thật Thông Minh! Em Đã Giải Được Câu Đố!"
                : `Đáp án câu đố là: "${question.correctAnswer}"`}
            </span>
          </div>
          {question.explanation && <p className="italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
};
