import React, { useState } from "react";
import { ReadingComprehensionQuestion } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { BookOpen, CheckCircle2, Sparkles, XCircle } from "lucide-react";

interface Props {
  question: ReadingComprehensionQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const ReadingComprehensionEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectSub = (subId: string, opt: string) => {
    if (disabled || submitted) return;
    soundFX.playClick();
    const updated = { ...answers, [subId]: opt };
    setAnswers(updated);

    // If all sub questions answered
    if (Object.keys(updated).length === question.subQuestions.length) {
      setSubmitted(true);
      let correctCount = 0;
      question.subQuestions.forEach((sq) => {
        if (updated[sq.id] === sq.correctAnswer) {
          correctCount++;
        }
      });

      const isAllCorrect = correctCount === question.subQuestions.length;
      if (isAllCorrect) {
        soundFX.playCorrect();
        soundFX.playVictory();
        onComplete(true, 100);
      } else {
        soundFX.playWrong();
        const sc = Math.round((correctCount / question.subQuestions.length) * 100);
        onComplete(false, sc);
      }
    }
  };

  return (
    <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-rose-200/80 pb-3">
        <BookOpen className="w-6 h-6 text-rose-700" />
        <div>
          <h3 className="font-bold text-rose-950 text-lg">Đọc Hiểu Văn Bản</h3>
          <p className="text-xs text-rose-800">Em hãy đọc kĩ đoạn văn/bài thơ và trả lời các câu hỏi bên dưới</p>
        </div>
      </div>

      {/* Text Passage Card */}
      <div className="bg-white rounded-2xl border border-rose-200 p-5 shadow-sm space-y-2">
        <h4 className="font-bold text-rose-900 text-center text-base uppercase tracking-wide">
          {question.passageTitle}
        </h4>
        <div className="text-slate-800 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-serif italic p-3 bg-amber-50/50 rounded-xl border border-amber-100/80">
          {question.passageText}
        </div>
      </div>

      {/* Sub Questions */}
      <div className="space-y-4">
        {question.subQuestions.map((sq, sIdx) => {
          const userAns = answers[sq.id];

          return (
            <div key={sq.id} className="bg-white rounded-2xl border border-rose-200 p-4 space-y-3">
              <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 text-xs flex items-center justify-center font-extrabold">
                  {sIdx + 1}
                </span>
                <span>{sq.question}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sq.options.map((opt, oIdx) => {
                  const isSelected = userAns === opt;
                  const isCorrect = opt === sq.correctAnswer;

                  let style = "bg-white border-rose-200 hover:bg-rose-50 text-slate-800";

                  if (submitted) {
                    if (isCorrect) {
                      style = "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold";
                    } else if (isSelected) {
                      style = "bg-red-100 border-red-500 text-red-900 font-bold";
                    } else {
                      style = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                    }
                  } else if (isSelected) {
                    style = "bg-rose-200 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-300";
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectSub(sq.id, opt)}
                      disabled={disabled || submitted}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between gap-2 ${style}`}
                    >
                      <span>{opt}</span>
                      {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="text-xs text-slate-600 italic bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                  {sq.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
