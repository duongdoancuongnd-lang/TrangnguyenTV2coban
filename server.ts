import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini AI Client Initialization (Server-side only)
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Chưa cấu hình GEMINI_API_KEY trong môi trường");
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // AI Explain Answer Endpoint (Giải thích chi tiết từ Thầy Đồ AI)
  app.post("/api/gemini/explain", async (req, res) => {
    try {
      const { question, userAnswer, correctAnswer, type, grade = 2 } = req.body;
      const ai = getAiClient();

      const prompt = `Bạn là "Thầy Đồ AI" - một thầy giáo Tiếng Việt lớp 2 cực kỳ ân cần, vui vẻ và thân thiện với các con học sinh tiểu học.
Hãy giải thích ngắn gọn, dễ hiểu (3-5 câu) cho một học sinh Lớp 2 về câu hỏi sau:
- Loại bài tập: ${type || "Tiếng Việt"}
- Câu hỏi: "${question}"
- Học sinh chọn: "${userAnswer}"
- Đáp án đúng: "${correctAnswer}"

Yêu cầu:
1. Dùng từ ngữ ngọt ngào, động viên (VD: "Con mến!", "Thầy khen con...", "Đừng buồn nhé...").
2. Giải thích vì sao đáp án đúng lại đúng (quy tắc chính tả, nghĩa của từ, hoặc ngữ pháp Lớp 2 theo GDPT 2018).
3. Cho thêm 1 ví dụ minh họa đơn giản vui nhộn.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
      });

      res.json({ explanation: response.text });
    } catch (error: any) {
      console.error("Error in /api/gemini/explain:", error);
      res.status(500).json({
        error: error.message || "Không thể lấy giải thích từ Thầy Đồ AI",
        explanation: "Thầy Đồ khuyên con hãy chú ý quy tắc chính tả và đọc kỹ câu hỏi nhé!",
      });
    }
  });

  // AI Custom Question Generator for Extra Practice
  app.post("/api/gemini/generate-practice", async (req, res) => {
    try {
      const { topic, difficulty = "trung-binh", count = 3 } = req.body;
      const ai = getAiClient();

      const prompt = `Hãy tạo ${count} câu hỏi trắc nghiệm Tiếng Việt Lớp 2 theo chương trình GDPT 2018.
Chủ đề: "${topic || "Chính tả và từ vựng Lớp 2"}"
Độ khó: ${difficulty}

Chỉ trả về JSON định dạng mảng các câu hỏi:
[
  {
    "id": "ai_1",
    "question": "Nội dung câu hỏi?",
    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    "correctAnswer": "Đáp án A",
    "explanation": "Giải thích ngắn gọn"
  }
]`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                question: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                correctAnswer: { type: Type.STRING },
                explanation: { type: Type.STRING },
              },
              required: ["id", "question", "options", "correctAnswer", "explanation"],
            },
          },
        },
      });

      const questions = JSON.parse(response.text || "[]");
      res.json({ questions });
    } catch (error: any) {
      console.error("Error in /api/gemini/generate-practice:", error);
      res.status(500).json({ error: error.message || "Lỗi tạo câu hỏi ngẫu nhiên" });
    }
  });

  // Serve Vite in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
