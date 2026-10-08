import React, { useState } from "react";
import { soundFX } from "../utils/audioEffects";
import { Bot, Send, Sparkles, RefreshCw, BookOpen, Check, HelpCircle } from "lucide-react";

interface Props {
  studentName: string;
}

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
}

export const AITutorModal: React.FC<Props> = ({ studentName }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: `Chào con ${studentName || "học sinh ngoan"}! Thầy là Thầy Đồ AI Trạng Nguyên Tiếng Việt. Con có thắc mắc gì về quy tắc chính tả, câu từ, ca dao hay muốn giải thích bài tập Lớp 2 cứ hỏi Thầy nhé!`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Quick practice topics
  const [aiQuestions, setAiQuestions] = useState<any[]>([]);
  const [isGeneratingPractice, setIsGeneratingPractice] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Chính tả c/k, g/gh, ng/ngh");

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    soundFX.playClick();
    const userMsg: Message = {
      id: `u_${Date.now()}`,
      sender: "user",
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/gemini/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userMsg.text,
          userAnswer: "Thắc mắc của học sinh",
          correctAnswer: "Giải đáp ngữ pháp/chính tả Tiếng Việt 2",
          type: "Hỏi đáp Tiếng Việt Lớp 2",
        }),
      });

      const data = await res.json();
      const aiReply: Message = {
        id: `ai_${Date.now()}`,
        sender: "ai",
        text: data.explanation || "Thầy Đồ khuyên con luôn đọc kỹ câu hỏi và chăm chỉ nhé!",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiReply]);
      soundFX.playCorrect();
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai_err_${Date.now()}`,
          sender: "ai",
          text: "Thầy Đồ khuyên con hãy chú ý quy tắc chính tả c/k, g/gh và đọc kỹ yêu cầu bài tập nhé!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePractice = async () => {
    setIsGeneratingPractice(true);
    soundFX.playClick();
    try {
      const res = await fetch("/api/gemini/generate-practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: selectedTopic,
          difficulty: "trung-binh",
          count: 3,
        }),
      });
      const data = await res.json();
      setAiQuestions(data.questions || []);
      soundFX.playVictory();
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingPractice(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-[#4ECDC4] rounded-2xl p-6 text-white shadow-md flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#2C7A74]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl border border-white/30">
            🧙‍♂️
          </div>
          <div>
            <div className="bg-[#2C7A74] text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full inline-block border border-white/30">
              Trợ Lý AI Độc Quyền
            </div>
            <h2 className="text-2xl font-black text-white mt-0.5">Thầy Đồ AI Trạng Nguyên</h2>
            <p className="text-xs text-teal-50 font-medium">
              Hỏi thầy về chính tả, ngữ pháp, nghĩa của từ hoặc yêu cầu tạo thêm bài tập ngẫu nhiên!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Section (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border-2 border-[#F0E6D2] border-b-4 border-b-[#4ECDC4] shadow-sm flex flex-col h-[500px] overflow-hidden">
          <div className="bg-[#FFF9E6] p-3 border-b-2 border-[#F0E6D2] flex items-center justify-between font-black text-xs text-slate-800">
            <span className="flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-[#4ECDC4]" />
              <span>Hỏi Đáp Trực Tiếp Với Thầy Đồ AI</span>
            </span>
            <span className="text-[10px] text-[#2C7A74] bg-[#4ECDC4]/20 px-2.5 py-0.5 rounded-full font-black border border-[#4ECDC4]/40">
              Sẵn sàng 24/7
            </span>
          </div>

          {/* Messages body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFF9E6]/30">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm shrink-0 shadow-sm border border-white">
                    🧙‍♂️
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    m.sender === "user"
                      ? "bg-[#FF8C42] text-white font-bold rounded-br-none"
                      : "bg-white text-slate-800 border-2 border-[#F0E6D2] rounded-bl-none font-medium"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  <span
                    className={`text-[9px] block text-right mt-1 font-bold ${
                      m.sender === "user" ? "text-amber-100" : "text-slate-400"
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 font-bold italic p-2">
                <RefreshCw className="w-4 h-4 animate-spin text-[#4ECDC4]" />
                <span>Thầy Đồ đang suy nghĩ câu trả lời cho con...</span>
              </div>
            )}
          </div>

          {/* Input form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t-2 border-[#F0E6D2] flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập thắc mắc của con về Tiếng Việt Lớp 2..."
              className="flex-1 px-4 py-2.5 rounded-full border-2 border-[#F0E6D2] text-xs sm:text-sm font-bold focus:outline-none focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/20"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="px-5 py-2.5 bg-[#4ECDC4] hover:bg-[#45B7AF] text-white rounded-full font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi</span>
            </button>
          </form>
        </div>

        {/* AI Generator Panel (1 col) */}
        <div className="bg-white rounded-2xl border-2 border-[#F0E6D2] border-b-4 border-b-[#FF8C42] p-5 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="font-black text-slate-800 text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF8C42]" />
              <span>Tạo Bài Tập AI Tự Chọn</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Chọn chủ đề để Thầy Đồ AI soạn thêm 3 câu hỏi trắc nghiệm mới!
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Chọn Chủ Đề Lớp 2:
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border-2 border-[#F0E6D2] font-bold text-xs text-slate-800 focus:outline-none focus:border-[#4ECDC4]"
            >
              <option value="Chính tả c/k, g/gh, ng/ngh">Chính tả c/k, g/gh, ng/ngh</option>
              <option value="Chính tả s/x, tr/ch, r/d/gi">Chính tả s/x, tr/ch, r/d/gi</option>
              <option value="Từ chỉ sự vật, hoạt động, đặc điểm">Từ chỉ sự vật, hoạt động, đặc điểm</option>
              <option value="Các kiểu câu: Ai là gì?, Ai làm gì?, Ai thế nào?">3 Kiểu câu cơ bản Lớp 2</option>
              <option value="Từ đồng nghĩa, từ trái nghĩa Lớp 2">Từ đồng nghĩa, từ trái nghĩa</option>
              <option value="Thành ngữ, ca dao tục ngữ chọn lọc Lớp 2">Thành ngữ, ca dao tục ngữ</option>
            </select>
          </div>

          <button
            onClick={handleGeneratePractice}
            disabled={isGeneratingPractice}
            className="w-full py-3 bg-[#FF8C42] hover:bg-[#E07026] text-white font-bold text-xs rounded-full shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
          >
            {isGeneratingPractice ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Thầy Đồ đang soạn đề...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>THẦY ĐỒ SOẠN ĐỀ AI</span>
              </>
            )}
          </button>

          {/* AI Generated Questions Display */}
          {aiQuestions.length > 0 && (
            <div className="space-y-3 pt-2 border-t-2 border-[#F0E6D2] max-h-[260px] overflow-y-auto">
              <div className="text-xs font-black text-[#2C7A74] bg-[#4ECDC4]/20 p-2.5 rounded-xl border border-[#4ECDC4]/40">
                ✨ {aiQuestions.length} Câu hỏi AI soạn riêng cho con:
              </div>
              {aiQuestions.map((q, idx) => (
                <div key={q.id || idx} className="p-3 bg-[#FFF9E6] rounded-xl border border-[#F0E6D2] space-y-1.5 text-xs">
                  <p className="font-bold text-slate-800">
                    {idx + 1}. {q.question}
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                    {q.options?.map((opt: string, oIdx: number) => (
                      <div
                        key={oIdx}
                        className={`p-1.5 rounded-lg border font-bold ${
                          opt === q.correctAnswer
                            ? "bg-[#4ECDC4]/20 border-[#4ECDC4] text-[#2C7A74]"
                            : "bg-white border-[#F0E6D2]"
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#2C7A74] font-semibold italic">💡 {q.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
