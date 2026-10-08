import React, { useState, useEffect } from "react";
import { WordOrderingQuestion } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { Check, RotateCcw, Sparkles, HelpCircle } from "lucide-react";

interface Props {
  question: WordOrderingQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const WordOrderingEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [availableWords, setAvailableWords] = useState<{ id: string; text: string }[]>([]);
  const [selectedSentence, setSelectedSentence] = useState<{ id: string; text: string }[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  useEffect(() => {
    // Shuffle the words
    const items = question.words.map((w, idx) => ({ id: `word_${idx}_${w}`, text: w }));
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedSentence([]);
    setStatus("idle");
  }, [question]);

  const handlePickWord = (wordObj: { id: string; text: string }) => {
    if (disabled || status === "correct") return;
    soundFX.playClick();
    setAvailableWords((prev) => prev.filter((w) => w.id !== wordObj.id));
    setSelectedSentence((prev) => [...prev, wordObj]);
    setStatus("idle");
  };

  const handleRemoveWord = (wordObj: { id: string; text: string }) => {
    if (disabled || status === "correct") return;
    soundFX.playClick();
    setSelectedSentence((prev) => prev.filter((w) => w.id !== wordObj.id));
    setAvailableWords((prev) => [...prev, wordObj]);
    setStatus("idle");
  };

  const handleReset = () => {
    if (disabled || status === "correct") return;
    soundFX.playClick();
    const items = question.words.map((w, idx) => ({ id: `word_${idx}_${w}`, text: w }));
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedSentence([]);
    setStatus("idle");
  };

  const handleCheck = () => {
    if (disabled || status === "correct") return;

    const currentString = selectedSentence
      .map((w) => w.text)
      .join(" ")
      .trim();

    const normalize = (str: string) => str.replace(/\s+/g, " ").trim().toLowerCase();

    if (normalize(currentString) === normalize(question.correctSentence)) {
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
    <div className="bg-orange-50/60 border border-orange-200 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-orange-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐯</span>
          <div>
            <h3 className="font-bold text-orange-950 text-lg">Hổ Con Thiên Tài</h3>
            <p className="text-xs text-orange-800">{question.instruction}</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          disabled={disabled || status === "correct"}
          className="text-xs font-semibold text-orange-800 hover:text-orange-950 bg-orange-100 hover:bg-orange-200 border border-orange-300 px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Xếp lại</span>
        </button>
      </div>

      {/* Selected sentence slot bar */}
      <div className="space-y-1.5">
        <div className="text-xs font-bold text-orange-900 uppercase tracking-wide">
          Khung ghép câu của em:
        </div>
        <div className="min-h-[64px] bg-white border-2 border-dashed border-orange-300 rounded-2xl p-3 flex flex-wrap items-center gap-2 shadow-inner">
          {selectedSentence.length === 0 ? (
            <span className="text-slate-400 text-sm italic font-normal">
              Bấm vào các từ bên dưới để ghép thành câu đúng...
            </span>
          ) : (
            selectedSentence.map((word) => (
              <button
                key={word.id}
                onClick={() => handleRemoveWord(word)}
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-3.5 py-1.5 rounded-xl shadow text-sm border border-orange-600 transition-all flex items-center gap-1"
              >
                <span>{word.text}</span>
                <span className="text-xs opacity-75">✕</span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Available shuffled words */}
      <div className="space-y-1.5">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-wide">
          Các từ xáo trộn (Chọn theo thứ tự):
        </div>
        <div className="flex flex-wrap gap-2.5 p-2 bg-orange-100/50 rounded-xl border border-orange-200">
          {availableWords.length === 0 ? (
            <span className="text-xs text-slate-500 italic p-1">Đã chọn hết các từ!</span>
          ) : (
            availableWords.map((word) => (
              <button
                key={word.id}
                onClick={() => handlePickWord(word)}
                className="bg-white hover:bg-orange-100 active:scale-95 text-slate-800 font-bold px-3.5 py-2 rounded-xl border border-orange-300 shadow-sm text-sm transition-all hover:border-orange-400 hover:shadow"
              >
                {word.text}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Submit Button & Feedback */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-orange-200/80">
        <button
          onClick={handleCheck}
          disabled={selectedSentence.length === 0 || status === "correct" || disabled}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow ${
            status === "correct"
              ? "bg-emerald-600 text-white cursor-default"
              : selectedSentence.length === 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700 active:scale-95 text-white shadow-amber-200"
          }`}
        >
          <Check className="w-4 h-4" />
          <span>{status === "correct" ? "Đã Xếp Đúng!" : "Kiểm Tra Câu Ghép"}</span>
        </button>

        {status === "incorrect" && (
          <div className="text-red-600 font-bold text-xs bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg animate-bounce">
            Chưa chính xác, em hãy bấm "Xếp lại" hoặc chỉnh sửa từ nhé!
          </div>
        )}
      </div>

      {/* Explanation */}
      {status === "correct" && (
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-3.5 text-xs text-emerald-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-emerald-800 text-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Chính Xác 100%! Hổ Con Thiên Tài Rất Giỏi!</span>
          </div>
          <p>
            <strong>Câu đúng:</strong> "{question.correctSentence}"
          </p>
          {question.explanation && <p className="italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
};
