import React, { useState, useEffect } from "react";
import { MatchingQuestion, MatchingPair } from "../../types";
import { soundFX } from "../../utils/audioEffects";
import { CheckCircle2, Sparkles, RefreshCw } from "lucide-react";

interface Props {
  question: MatchingQuestion;
  onComplete: (isCorrect: boolean, score: number) => void;
  disabled?: boolean;
}

interface CardItem {
  id: string; // unique card id
  pairId: string;
  text: string;
  side: "left" | "right";
  isMatched: boolean;
}

export const MatchingGameEx: React.FC<Props> = ({ question, onComplete, disabled }) => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<CardItem | null>(null);
  const [selectedRight, setSelectedRight] = useState<CardItem | null>(null);
  const [matchedPairsCount, setMatchedPairsCount] = useState<number>(0);
  const [wrongFlash, setWrongFlash] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    // Prepare matching cards: shuffle left items and shuffle right items
    const lefts: CardItem[] = question.pairs.map((p, idx) => ({
      id: `L_${p.id}_${idx}`,
      pairId: p.id,
      text: p.left,
      side: "left",
      isMatched: false,
    }));

    const rights: CardItem[] = question.pairs.map((p, idx) => ({
      id: `R_${p.id}_${idx}`,
      pairId: p.id,
      text: p.right,
      side: "right",
      isMatched: false,
    }));

    // Shuffle each array independently
    const shuffledLefts = [...lefts].sort(() => Math.random() - 0.5);
    const shuffledRights = [...rights].sort(() => Math.random() - 0.5);

    // Combine them
    setCards([...shuffledLefts, ...shuffledRights]);
    setMatchedPairsCount(0);
    setSelectedLeft(null);
    setSelectedRight(null);
    setIsDone(false);
  }, [question]);

  const handleSelectCard = (card: CardItem) => {
    if (disabled || card.isMatched || isDone) return;

    soundFX.playClick();

    if (card.side === "left") {
      if (selectedLeft?.id === card.id) {
        setSelectedLeft(null);
      } else {
        setSelectedLeft(card);
        if (selectedRight) {
          checkMatch(card, selectedRight);
        }
      }
    } else {
      if (selectedRight?.id === card.id) {
        setSelectedRight(null);
      } else {
        setSelectedRight(card);
        if (selectedLeft) {
          checkMatch(selectedLeft, card);
        }
      }
    }
  };

  const checkMatch = (left: CardItem, right: CardItem) => {
    if (left.pairId === right.pairId) {
      // Correct match
      soundFX.playCorrect();
      setCards((prev) =>
        prev.map((c) =>
          c.id === left.id || c.id === right.id ? { ...c, isMatched: true } : c
        )
      );
      setSelectedLeft(null);
      setSelectedRight(null);

      const newCount = matchedPairsCount + 1;
      setMatchedPairsCount(newCount);

      if (newCount === question.pairs.length) {
        setIsDone(true);
        soundFX.playVictory();
        onComplete(true, 100);
      }
    } else {
      // Wrong match
      soundFX.playWrong();
      setWrongFlash([left.id, right.id]);
      setTimeout(() => {
        setWrongFlash([]);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 700);
    }
  };

  const leftCards = cards.filter((c) => c.side === "left");
  const rightCards = cards.filter((c) => c.side === "right");

  return (
    <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐱</span>
          <div>
            <h3 className="font-bold text-amber-900 text-lg">Mèo Con Nhanh Trí</h3>
            <p className="text-xs text-amber-700">{question.instruction}</p>
          </div>
        </div>
        <div className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1.5 border border-amber-300">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>
            Đã ghép: {matchedPairsCount} / {question.pairs.length} cặp
          </span>
        </div>
      </div>

      {/* Grid view: 2 columns for Left and Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-2">
          <div className="text-center font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-100/80 py-1 rounded-lg">
            Cột Từ Ngữ (A)
          </div>
          <div className="grid grid-cols-1 gap-2">
            {leftCards.map((card) => {
              const isSelected = selectedLeft?.id === card.id;
              const isWrong = wrongFlash.includes(card.id);

              return (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(card)}
                  disabled={card.isMatched || disabled}
                  className={`w-full text-left p-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                    card.isMatched
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700 opacity-60 cursor-not-allowed"
                      : isWrong
                      ? "bg-red-100 border-red-400 text-red-800 animate-bounce"
                      : isSelected
                      ? "bg-amber-200 border-amber-500 text-amber-950 ring-2 ring-amber-400 scale-[1.01]"
                      : "bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-100/50 text-slate-800 shadow-sm"
                  }`}
                >
                  <span className="leading-snug">{card.text}</span>
                  {card.isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <div className="text-center font-bold text-xs uppercase tracking-wider text-indigo-800 bg-indigo-100/80 py-1 rounded-lg">
            Cột Ghép Nối (B)
          </div>
          <div className="grid grid-cols-1 gap-2">
            {rightCards.map((card) => {
              const isSelected = selectedRight?.id === card.id;
              const isWrong = wrongFlash.includes(card.id);

              return (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(card)}
                  disabled={card.isMatched || disabled}
                  className={`w-full text-left p-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                    card.isMatched
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700 opacity-60 cursor-not-allowed"
                      : isWrong
                      ? "bg-red-100 border-red-400 text-red-800 animate-bounce"
                      : isSelected
                      ? "bg-indigo-200 border-indigo-500 text-indigo-950 ring-2 ring-indigo-400 scale-[1.01]"
                      : "bg-white border-amber-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-800 shadow-sm"
                  }`}
                >
                  <span className="leading-snug">{card.text}</span>
                  {card.isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {isDone && (
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-4 text-center space-y-1 animate-fade-in">
          <div className="text-emerald-800 font-extrabold text-base flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span>Thật Tuyệt Vời! Mèo Con Nhanh Trí Đã Ghép Đúng Tất Cả!</span>
          </div>
          {question.explanation && (
            <p className="text-xs text-emerald-700 italic">{question.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};
