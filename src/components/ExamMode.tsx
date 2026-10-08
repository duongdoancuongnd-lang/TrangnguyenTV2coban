import React, { useState, useEffect } from "react";
import { ExamRound, ExamResult, StudentProfile, ExerciseQuestion } from "../types";
import { soundFX } from "../utils/audioEffects";
import { MatchingGameEx } from "./exercises/MatchingGameEx";
import { WordOrderingEx } from "./exercises/WordOrderingEx";
import { WordSortingEx } from "./exercises/WordSortingEx";
import { FillBlanksEx } from "./exercises/FillBlanksEx";
import { MultipleChoiceEx } from "./exercises/MultipleChoiceEx";
import { RiddleEx } from "./exercises/RiddleEx";
import { ReadingComprehensionEx } from "./exercises/ReadingComprehensionEx";
import { Clock, CheckCircle2, ChevronRight, ChevronLeft, Award, Sparkles, AlertCircle } from "lucide-react";

interface Props {
  round: ExamRound;
  profile: StudentProfile;
  isExamMode?: boolean; // true = Official timed exam, false = Free practice
  onFinishExam: (result: ExamResult) => void;
  onBackToRounds: () => void;
}

export const ExamMode: React.FC<Props> = ({
  round,
  profile,
  isExamMode = false,
  onFinishExam,
  onBackToRounds,
}) => {
  // Collect all questions across parts
  const allQuestions: { question: ExerciseQuestion; partName: string; partNumber: number }[] = [];
  round.parts.forEach((p) => {
    p.questions.forEach((q) => {
      allQuestions.push({ question: q, partName: p.partName, partNumber: p.partNumber });
    });
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [questionScores, setQuestionScores] = useState<Record<number, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(round.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Timer effect for exam mode
  useEffect(() => {
    if (!isExamMode || isSubmitted || !hasStarted) return;

    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamMode, isSubmitted, hasStarted]);

  const currentItem = allQuestions[currentIndex];

  const handleExerciseComplete = (qIndex: number, isCorrect: boolean, score: number) => {
    setQuestionScores((prev) => ({
      ...prev,
      [qIndex]: score,
    }));
  };

  const handleFinalSubmit = () => {
    soundFX.playVictory();
    setIsSubmitted(true);

    let totalScore = 0;
    const maxScore = allQuestions.length * 100;

    Object.values(questionScores).forEach((sc) => {
      totalScore += sc;
    });

    const percent = maxScore > 0 ? totalScore / maxScore : 0;
    let title: "Trạng Nguyên" | "Bảng Nhãn" | "Thám Hoa" | "Tiến Sĩ" | "Tú Tài" = "Tú Tài";

    if (percent >= 0.9) title = "Trạng Nguyên";
    else if (percent >= 0.8) title = "Bảng Nhãn";
    else if (percent >= 0.7) title = "Thám Hoa";
    else if (percent >= 0.5) title = "Tiến Sĩ";

    const result: ExamResult = {
      roundId: round.id,
      studentName: profile.name || "Học Sinh Trạng Nguyên",
      className: profile.className || "2A",
      schoolName: profile.schoolName || "Trường Tiểu Học",
      score: totalScore,
      maxScore,
      timeSpentSeconds: round.timeLimitMinutes * 60 - timeLeftSeconds,
      totalQuestions: allQuestions.length,
      correctCount: Object.values(questionScores).filter((s) => s > 0).length,
      date: new Date().toLocaleDateString("vi-VN"),
      titleAwarded: title,
    };

    onFinishExam(result);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in pb-16">
        <button
          onClick={onBackToRounds}
          className="text-xs font-bold text-[#FF8C42] hover:bg-[#FFF9E6] bg-white border-2 border-[#F0E6D2] px-4 py-1.5 rounded-full transition-all inline-flex items-center gap-1.5"
        >
          ← Trở Về Danh Sách Vòng Thi
        </button>

        <div className="bg-white rounded-2xl border-2 border-[#F0E6D2] border-b-8 border-b-[#FF8C42] p-6 sm:p-8 shadow-md text-center space-y-6">
          <div className="w-20 h-20 bg-[#FFF9E6] border-4 border-[#FFD93D] rounded-full mx-auto flex items-center justify-center text-4xl shadow-sm">
            🎓
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#FF8C42] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
              <span>{round.semester}</span>
              <span>•</span>
              <span>Vòng {round.id}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              {round.title}
            </h2>
            <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
              Chủ đề: <strong className="text-slate-800">{round.topic}</strong>
            </p>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <div className="bg-[#FFF9E6] p-3 rounded-xl border border-[#FFD93D]">
              <span className="text-[10px] font-black uppercase text-amber-800 block">Chế Độ Thi</span>
              <span className="text-xs font-bold text-slate-800">
                {isExamMode ? "⏱️ Thi Thử Tính Giờ" : "📚 Ôn Luyện Tự Do"}
              </span>
            </div>

            <div className="bg-[#FFF9E6] p-3 rounded-xl border border-[#FFD93D]">
              <span className="text-[10px] font-black uppercase text-amber-800 block">Thời Gian</span>
              <span className="text-xs font-bold text-slate-800">
                {isExamMode ? `${round.timeLimitMinutes} Phút` : "Tự do"}
              </span>
            </div>

            <div className="bg-[#FFF9E6] p-3 rounded-xl border border-[#FFD93D] col-span-2 sm:col-span-1">
              <span className="text-[10px] font-black uppercase text-amber-800 block">Số Câu Hỏi</span>
              <span className="text-xs font-bold text-slate-800">
                {allQuestions.length} Câu Trắc Nghiệm & Điền Từ
              </span>
            </div>
          </div>

          {/* Student details */}
          <div className="bg-[#4ECDC4]/15 border-2 border-[#4ECDC4] p-4 rounded-xl flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="text-3xl">👨‍🎓</div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#2C7A74] block">Thí Sinh Bảng Vàng</span>
                <span className="text-sm font-black text-slate-800">{profile.name || "Học Sinh Trạng Nguyên"}</span>
                <span className="text-xs text-slate-500 font-bold block">
                  {profile.className || "Lớp 2A"} • {profile.schoolName || "Trường Tiểu Học"}
                </span>
              </div>
            </div>
            <span className="bg-white px-3 py-1 rounded-full text-xs font-black text-[#FF8C42] border border-[#FFD93D] shrink-0">
              Sẵn Sàng!
            </span>
          </div>

          {/* Prominent START BUTTON */}
          <div className="pt-2">
            <button
              onClick={() => {
                soundFX.playClick();
                setHasStarted(true);
              }}
              className="w-full sm:w-auto px-10 py-4 bg-[#FF8C42] hover:bg-[#E07026] text-white text-lg font-black uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto border-2 border-white"
            >
              <Sparkles className="w-6 h-6 text-[#FFD93D]" />
              <span>🚀 BẮT ĐẦU LÀM BÀI</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-16">
      {/* Exam Header */}
      <div className="bg-white rounded-2xl border-2 border-[#F0E6D2] border-b-4 border-b-[#FF8C42] p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToRounds}
              className="text-xs font-bold text-[#FF8C42] hover:bg-[#FFF9E6] bg-[#FFF9E6] border border-[#FFD93D] px-3.5 py-1 rounded-full transition-all"
            >
              ← Trở về
            </button>
            <span className="text-xs font-black uppercase tracking-wider bg-[#FF8C42] text-white px-3 py-0.5 rounded-full">
              {round.semester}
            </span>
            <span className="text-xs font-bold text-slate-500">
              Vòng {round.id} ({round.difficulty})
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900 mt-1.5">{round.title}</h2>
        </div>

        {/* Timer or Status */}
        <div className="flex items-center gap-3">
          {isExamMode && !isSubmitted && (
            <div className="bg-rose-50 border-2 border-rose-200 px-4 py-1.5 rounded-full flex items-center gap-2 font-mono font-black text-rose-600 text-lg shadow-sm">
              <Clock className="w-5 h-5 text-rose-500 animate-pulse" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>
          )}

          <div className="text-right">
            <span className="text-xs font-bold text-slate-500 block">Tiến độ làm bài</span>
            <span className="text-sm font-black text-[#FF8C42]">
              Câu {currentIndex + 1} / {allQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Question Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {allQuestions.map((qItem, idx) => {
          const isDone = questionScores[idx] !== undefined;
          const isCurrent = idx === currentIndex;

          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-10 h-10 rounded-full font-black text-xs shrink-0 transition-all flex items-center justify-center ${
                isCurrent
                  ? "bg-[#FF8C42] text-white ring-4 ring-[#FFD93D] shadow-md scale-105"
                  : isDone
                  ? "bg-[#4ECDC4]/20 text-[#2C7A74] border-2 border-[#4ECDC4]"
                  : "bg-white text-slate-600 border-2 border-[#E6E6E6] hover:bg-slate-50"
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Part Badge */}
      <div className="bg-[#FFF9E6] border-2 border-[#FFD93D] px-4 py-2 rounded-full font-extrabold text-amber-950 text-xs flex items-center justify-between shadow-sm">
        <span>{currentItem.partName}</span>
        <span className="text-[10px] text-[#FF8C42] bg-white px-2.5 py-0.5 rounded-full border border-[#FFD93D] font-black uppercase">
          Dạng: {currentItem.question.type}
        </span>
      </div>

      {/* Exercise Component Switcher */}
      <div className="bg-white rounded-2xl border-2 border-[#F0E6D2] p-3 sm:p-5 shadow-sm">
        {currentItem.question.type === "MATCHING" && (
          <MatchingGameEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "WORD_ORDERING" && (
          <WordOrderingEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "WORD_SORTING" && (
          <WordSortingEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "FILL_BLANKS" && (
          <FillBlanksEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "MULTIPLE_CHOICE" && (
          <MultipleChoiceEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "RIDDLE" && (
          <RiddleEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}

        {currentItem.question.type === "READING_COMPREHENSION" && (
          <ReadingComprehensionEx
            question={currentItem.question}
            onComplete={(isCorr, sc) => handleExerciseComplete(currentIndex, isCorr, sc)}
            disabled={isSubmitted}
          />
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white border-2 border-[#E6E6E6] text-slate-700 disabled:opacity-40 transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu Trước</span>
        </button>

        {currentIndex < allQuestions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(allQuestions.length - 1, prev + 1))}
            className="px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-[#FF8C42] hover:bg-[#E07026] text-white shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>Câu Tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleFinalSubmit}
            disabled={isSubmitted}
            className="px-8 py-3 rounded-full font-black text-sm bg-[#4ECDC4] hover:bg-[#45B7AF] text-white shadow-md transition-all flex items-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Nộp Bài Vòng {round.id}</span>
          </button>
        )}
      </div>
    </div>
  );
};
