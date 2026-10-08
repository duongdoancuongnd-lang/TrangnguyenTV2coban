import React, { useState } from "react";
import { MultipleChoiceQuestion } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { Check, CheckCircle2, HelpCircle, Sparkles, XCircle } from "lucide-react";

interface Props {
  question: MultipleChoiceQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const MultipleChoiceEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    if (disabled || submitted) return;
    soundFX.playClick();
    setSelectedOpt(option);

    setSubmitted(true);
    const isCorrect = option === question.correctAnswer;
    if (isCorrect) {
      soundFX.playCorrect();
      onComplete(true, 100);
    } else {
      soundFX.playWrong();
      onComplete(false, 0);
    }
  };

  return (
    <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-indigo-200/80 pb-3">
        <span className="text-2xl">💡</span>
        <div>
          <h3 className="font-bold text-indigo-950 text-lg">Câu Hỏi Trắc Nghiệm</h3>
          <p className="text-xs text-indigo-800">Chọn 1 đáp án đúng nhất trong các lựa chọn sau</p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-2xl border border-indigo-200 shadow-sm">
        <p className="text-base font-bold text-slate-800 leading-snug">{question.question}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx); // A, B, C, D
          const isSelected = selectedOpt === opt;
          const isCorrect = opt === question.correctAnswer;

          let btnStyle =
            "bg-white border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-800 shadow-sm";

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
              className={`p-3.5 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between gap-3 ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-extrabold flex items-center justify-center text-xs shrink-0 border border-indigo-200">
                  {letter}
                </span>
                <span>{opt}</span>
              </div>

              {submitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
              {submitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
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
                ? "Đáp án chính xác! Em học rất giỏi!"
                : `Chưa chính xác! Đáp án đúng là: "${question.correctAnswer}"`}
            </span>
          </div>
          {question.explanation && <p className="italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
};
