import React, { useState, useEffect } from "react";
import { WordSortingQuestion, WordSortingItem, WordSortingCategory } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { Check, RotateCcw, Sparkles } from "lucide-react";

interface Props {
  question: WordSortingQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

export const WordSortingEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [unassigned, setUnassigned] = useState<WordSortingItem[]>([]);
  const [assigned, setAssigned] = useState<Record<string, WordSortingItem[]>>({});
  const [selectedItem, setSelectedItem] = useState<WordSortingItem | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  useEffect(() => {
    // Shuffle items
    const shuffled = [...question.items].sort(() => Math.random() - 0.5);
    setUnassigned(shuffled);

    const initialMap: Record<string, WordSortingItem[]> = {};
    question.categories.forEach((cat) => {
      initialMap[cat.id] = [];
    });
    setAssigned(initialMap);
    setSelectedItem(null);
    setStatus("idle");
  }, [question]);

  const handleSelectItem = (item: WordSortingItem) => {
    if (disabled || status === "correct") return;
    soundFX.playClick();
    if (selectedItem?.id === item.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const handlePlaceInCategory = (categoryId: string) => {
    if (!selectedItem || disabled || status === "correct") return;
    soundFX.playClick();

    // Remove from unassigned
    setUnassigned((prev) => prev.filter((i) => i.id !== selectedItem.id));

    // Remove from any previous assigned category
    setAssigned((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((cId) => {
        updated[cId] = updated[cId].filter((i) => i.id !== selectedItem.id);
      });
      updated[categoryId] = [...(updated[categoryId] || []), selectedItem];
      return updated;
    });

    setSelectedItem(null);
    setStatus("idle");
  };

  const handleRemoveFromCategory = (item: WordSortingItem) => {
    if (disabled || status === "correct") return;
    soundFX.playClick();

    setAssigned((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((cId) => {
        updated[cId] = updated[cId].filter((i) => i.id !== item.id);
      });
      return updated;
    });

    setUnassigned((prev) => [...prev, item]);
    setStatus("idle");
  };

  const handleReset = () => {
    if (disabled || status === "correct") return;
    soundFX.playClick();

    const shuffled = [...question.items].sort(() => Math.random() - 0.5);
    setUnassigned(shuffled);

    const initialMap: Record<string, WordSortingItem[]> = {};
    question.categories.forEach((cat) => {
      initialMap[cat.id] = [];
    });
    setAssigned(initialMap);
    setSelectedItem(null);
    setStatus("idle");
  };

  const handleCheck = () => {
    if (disabled || status === "correct") return;

    let isAllCorrect = true;

    // Check if every item is assigned to its target category
    question.items.forEach((item) => {
      const currentCatItems = assigned[item.categoryId] || [];
      if (!currentCatItems.some((i) => i.id === item.id)) {
        isAllCorrect = false;
      }
    });

    if (isAllCorrect && unassigned.length === 0) {
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
    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐃</span>
          <div>
            <h3 className="font-bold text-amber-950 text-lg">Trâu Vàng Bác Học</h3>
            <p className="text-xs text-amber-800">{question.title}</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          disabled={disabled || status === "correct"}
          className="text-xs font-semibold text-amber-800 hover:text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Làm lại</span>
        </button>
      </div>

      {/* Unassigned items box */}
      <div className="space-y-1.5">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
          1. Bấm chọn từ ngữ cần phân loại:
        </div>
        <div className="min-h-[56px] p-3 bg-white rounded-xl border border-amber-200 flex flex-wrap gap-2 shadow-inner">
          {unassigned.length === 0 ? (
            <span className="text-xs text-slate-400 italic">
              Đã đưa hết các từ vào giỏ! Hãy kiểm tra kết quả bên dưới.
            </span>
          ) : (
            unassigned.map((item) => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                    isSelected
                      ? "bg-amber-500 text-white ring-2 ring-amber-400 scale-105"
                      : "bg-amber-100/80 hover:bg-amber-200 text-amber-950 border border-amber-300"
                  }`}
                >
                  {item.text}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Category baskets */}
      <div className="space-y-1.5">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
          2. Bấm vào Giỏ tương ứng để xếp từ vào:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {question.categories.map((cat) => {
            const catItems = assigned[cat.id] || [];

            return (
              <div
                key={cat.id}
                onClick={() => handlePlaceInCategory(cat.id)}
                className={`border-2 rounded-2xl p-3 bg-white transition-all cursor-pointer min-h-[120px] flex flex-col justify-between ${
                  selectedItem
                    ? "border-amber-400 bg-amber-50/30 hover:border-amber-600 shadow-md"
                    : "border-amber-200 hover:border-amber-300"
                }`}
              >
                <div>
                  <div className="font-bold text-xs text-amber-900 border-b border-amber-100 pb-1.5 mb-2 flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-extrabold">
                      {catItems.length} từ
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {catItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromCategory(item);
                        }}
                        className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-300 flex items-center gap-1 group transition-all"
                        title="Bấm để lấy lại từ này"
                      >
                        <span>{item.text}</span>
                        <span className="text-[10px] text-emerald-600 group-hover:text-emerald-900">
                          ✕
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedItem && (
                  <div className="mt-2 text-center text-[11px] font-bold text-amber-600 bg-amber-100 py-1 rounded-lg animate-pulse">
                    + Xếp từ "{selectedItem.text}" vào đây
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer controls */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-amber-200/80">
        <button
          onClick={handleCheck}
          disabled={unassigned.length > 0 || status === "correct" || disabled}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow ${
            status === "correct"
              ? "bg-emerald-600 text-white cursor-default"
              : unassigned.length > 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700 active:scale-95 text-white shadow-amber-200"
          }`}
        >
          <Check className="w-4 h-4" />
          <span>{status === "correct" ? "Chính Xác!" : "Nộp Bài Phân Loại"}</span>
        </button>

        {status === "incorrect" && (
          <div className="text-red-600 font-bold text-xs bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg animate-bounce">
            Có từ xếp chưa đúng giỏ, em hãy kiểm tra lại nhé!
          </div>
        )}
      </div>

      {status === "correct" && (
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-3.5 text-xs text-emerald-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-emerald-800 text-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Chính Xác! Trâu Vàng Bác Học Rất Khen Ngợi Em!</span>
          </div>
          {question.explanation && <p className="italic">{question.explanation}</p>}
        </div>
      )}
    </div>
  );
};
