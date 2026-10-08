export type GradeSemester = "HK1" | "HK2";

export type DifficultyLevel = "dễ" | "trung-bình" | "khó";

export interface StudentProfile {
  name: string;
  className: string;
  schoolName: string;
  avatar: string; // e.g. "mascot_cat", "mascot_tiger", "mascot_buffalo", "mascot_trangnguyen"
  stars: number;
  totalScore: number;
  completedRounds: Record<number, { score: number; maxScore: number; date: string; timeSpentSeconds: number }>;
}

export type ExerciseType =
  | "MULTIPLE_CHOICE"
  | "MATCHING" // Mèo con nhanh trí
  | "WORD_ORDERING" // Hổ con thiên tài
  | "FILL_BLANKS" // Điền từ chỗ trống
  | "WORD_SORTING" // Trâu vàng bác học
  | "RIDDLE" // Giải đố vui
  | "READING_COMPREHENSION"; // Đọc hiểu văn bản

// Trắc nghiệm
export interface MultipleChoiceQuestion {
  id: string;
  type: "MULTIPLE_CHOICE";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
}

// Mèo con nhanh trí: Ghép 10 cặp từ tương ứng
export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingQuestion {
  id: string;
  type: "MATCHING";
  title: string;
  instruction: string;
  pairs: MatchingPair[]; // 10 pairs
  explanation?: string;
}

// Hổ con thiên tài: Sắp xếp các ô từ thành câu
export interface WordOrderingQuestion {
  id: string;
  type: "WORD_ORDERING";
  instruction: string;
  words: string[]; // Xáo trộn
  correctSentence: string;
  explanation: string;
}

// Điền từ/chữ còn thiếu vào chỗ trống
export interface FillBlanksQuestion {
  id: string;
  type: "FILL_BLANKS";
  question: string; // Ví dụ: "Ăn vóc học ... " hoặc "Bầy chim hót líu ... o"
  correctAnswer: string; // "mở" hoặc "l"
  explanation: string;
  hint?: string;
}

// Trâu vàng bác học: Phân loại từ ngữ vào các giỏ
export interface WordSortingCategory {
  id: string;
  name: string; // ví dụ: "Từ chỉ sự vật", "Từ chỉ hoạt động", "Từ chỉ đặc điểm"
}

export interface WordSortingItem {
  id: string;
  text: string; // ví dụ: "thầy giáo", "chạy nhảy", "xanh biếc"
  categoryId: string;
}

export interface WordSortingQuestion {
  id: string;
  type: "WORD_SORTING";
  title: string;
  categories: WordSortingCategory[];
  items: WordSortingItem[];
  explanation: string;
}

// Giải đố vui Trạng Nguyên
export interface RiddleQuestion {
  id: string;
  type: "RIDDLE";
  riddleText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Đọc hiểu văn bản
export interface ReadingComprehensionQuestion {
  id: string;
  type: "READING_COMPREHENSION";
  passageTitle: string;
  passageText: string;
  subQuestions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export type ExerciseQuestion =
  | MultipleChoiceQuestion
  | MatchingQuestion
  | WordOrderingQuestion
  | FillBlanksQuestion
  | WordSortingQuestion
  | RiddleQuestion
  | ReadingComprehensionQuestion;

export interface ExamRound {
  id: number; // 1 to 19
  title: string; // e.g. "Vòng 1: Tuần 1 - Em đến trường"
  semester: GradeSemester;
  difficulty: DifficultyLevel;
  topic: string;
  timeLimitMinutes: number; // e.g. 20
  parts: {
    partNumber: number;
    partName: string; // e.g. "Phần 1: Mèo con nhanh trí", "Phần 2: Hổ con thiên tài", "Phần 3: Trắc nghiệm tổng hợp"
    questions: ExerciseQuestion[];
  }[];
}

export interface ExamResult {
  roundId: number;
  studentName: string;
  className: string;
  schoolName: string;
  score: number;
  maxScore: number;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  date: string;
  titleAwarded: "Trạng Nguyên" | "Bảng Nhãn" | "Thám Hoa" | "Tiến Sĩ" | "Tú Tài";
}
