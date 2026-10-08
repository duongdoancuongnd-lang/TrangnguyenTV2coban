import { ExamRound } from "../types";

export const EXAM_ROUNDS: ExamRound[] = [
  // ===================== HỌC KỲ 1 (VÒNG 1 - 10) =====================
  {
    id: 1,
    title: "Vòng 1: Tuần 1 - Em đến trường (Chính tả c/k, Từ chỉ sự vật)",
    semester: "HK1",
    difficulty: "dễ",
    topic: "Chính tả c/k, g/gh, Từ chỉ sự vật",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Nối cặp từ tương ứng)",
        questions: [
          {
            id: "v1_p1_matching",
            type: "MATCHING",
            title: "Nối cặp từ có nghĩa tương đồng hoặc đi đôi với nhau",
            instruction: "Em hãy click lần lượt 2 ô có nội dung khớp với nhau để ghép thành 1 cặp đúng.",
            pairs: [
              { id: "m1", left: "Học sinh", right: "Trường học" },
              { id: "m2", left: "Thầy giáo", right: "Giảng bài" },
              { id: "m3", left: "Sách vở", right: "Dụng cụ học tập" },
              { id: "m4", left: "Bảng đen", right: "Phấn trắng" },
              { id: "m5", left: "Siêng năng", right: "Cần cù" },
              { id: "m6", left: "Con trâu", right: "Con vật" },
              { id: "m7", left: "Thước kẻ", right: "Kẻ đường thẳng" },
              { id: "m8", left: "Lớp học", right: "Bạn bè" },
              { id: "m9", left: "Cây bàng", right: "Tỏa bóng mát" },
              { id: "m10", left: "Trống trường", right: "Báo giờ ra chơi" },
            ],
            explanation: "Các cặp từ ghép lại thành sự vật, dụng cụ học tập và hoạt động gắn liền với mái trường thân yêu."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp từ thành câu)",
        questions: [
          {
            id: "v1_p2_wordorder1",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp các ô chữ sau để tạo thành câu hoàn chỉnh:",
            words: ["rất", "Em", "mái trường", "yêu", "tiểu học."],
            correctSentence: "Em rất yêu mái trường tiểu học.",
            explanation: "Cấu trúc câu nêu tình cảm: [Chủ ngữ] + [rất yêu] + [bộ phận bổ sung]."
          },
          {
            id: "v1_p2_wordorder2",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp các ô chữ sau để tạo thành câu tục ngữ, ca dao:",
            words: ["mở.", "vóc", "Ăn", "học"],
            correctSentence: "Ăn vóc học mở.",
            explanation: "Thành ngữ 'Ăn vóc học mở' khuyên chúng ta ăn uống đầy đủ để khỏe mạnh và siêng học để mở mang trí tuệ."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt",
        questions: [
          {
            id: "v1_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Từ nào dưới đây viết ĐÚNG quy tắc chính tả c/k?",
            options: ["kể chuyện", "céo co", "kây thước", "céo cờ"],
            correctAnswer: "kể chuyện",
            explanation: "Âm 'k' đứng trước các nguyên âm i, e, ê. Âm 'c' đứng trước các nguyên âm còn lại (a, o, ô, u, ư...)."
          },
          {
            id: "v1_p3_q2",
            type: "MULTIPLE_CHOICE",
            question: "Dãy từ nào sau đây gồm toàn từ chỉ SỰ VẬT?",
            options: ["bàn ghế, học sinh, con mèo", "chạy nhảy, vui vẻ, hoa hồng", "đọc sách, múa hát, xinh đẹp", "đỏ thắm, bơi lội, sách giáo khoa"],
            correctAnswer: "bàn ghế, học sinh, con mèo",
            explanation: "Từ chỉ sự vật gồm từ chỉ người (học sinh), từ chỉ con vật (con mèo), từ chỉ đồ vật (bàn ghế) và từ chỉ cây cối."
          },
          {
            id: "v1_p3_q3",
            type: "FILL_BLANKS",
            question: "Điền chữ 'c' hoặc 'k' vào chỗ trống: Mẹ ...ẹo con lại gần để dặn dò.",
            correctAnswer: "k",
            explanation: "Trước âm 'e', ta viết chữ 'k' (kéo)."
          },
          {
            id: "v1_p3_q4",
            type: "RIDDLE",
            riddleText: "Cái gì bằng gỗ hình chữ nhật dài,\nGiúp em kẻ thẳng mỗi ngày trên trang?",
            options: ["Thước kẻ", "Bút chì", "Cặp sách", "Cục tẩy"],
            correctAnswer: "Thước kẻ",
            explanation: "Thước kẻ là đồ dùng học tập dùng để kẻ đường thẳng."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Vòng 2: Tuần 2, 3 - Niềm vui đi học (Quy tắc g/gh, ng/ngh, Từ chỉ hoạt động)",
    semester: "HK1",
    difficulty: "dễ",
    topic: "Chính tả g/gh, ng/ngh, Từ chỉ hoạt động",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại từ ngữ)",
        questions: [
          {
            id: "v2_p1_sorting",
            type: "WORD_SORTING",
            title: "Em hãy phân loại các từ sau vào đúng giỏ tương ứng:",
            categories: [
              { id: "cat_suvat", name: "Giỏ 1: Từ chỉ sự vật" },
              { id: "cat_hoatdong", name: "Giỏ 2: Từ chỉ hoạt động" }
            ],
            items: [
              { id: "i1", text: "Thước kẻ", categoryId: "cat_suvat" },
              { id: "i2", text: "Viết bài", categoryId: "cat_hoatdong" },
              { id: "i3", text: "Bảng lớp", categoryId: "cat_suvat" },
              { id: "i4", text: "Lắng nghe", categoryId: "cat_hoatdong" },
              { id: "i5", text: "Học sinh", categoryId: "cat_suvat" },
              { id: "i6", text: "Tập thể dục", categoryId: "cat_hoatdong" },
              { id: "i7", text: "Cây bàng", categoryId: "cat_suvat" },
              { id: "i8", text: "Múa hát", categoryId: "cat_hoatdong" }
            ],
            explanation: "Từ chỉ sự vật là đồ vật, người, cây cối. Từ chỉ hoạt động thể hiện sự cử động, hành động."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền từ còn thiếu vào ô trống",
        questions: [
          {
            id: "v2_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền 'g' hoặc 'gh' vào chỗ trống: Em thích nghe cô ...i lại những lời khen.",
            correctAnswer: "gh",
            explanation: "Trước vần 'i', ta viết 'gh' (ghi)."
          },
          {
            id: "v2_p2_fb2",
            type: "FILL_BLANKS",
            question: "Điền 'ng' hoặc 'ngh' vào chỗ trống: Bạn Nam đang ...ỉ ngơi sau giờ học.",
            correctAnswer: "ngh",
            explanation: "Trước vần 'i', ta điền 'ngh' (nghỉ)."
          },
          {
            id: "v2_p2_fb3",
            type: "FILL_BLANKS",
            question: "Điền từ còn thiếu vào câu tục ngữ: Tiên học lễ, hậu học ...",
            correctAnswer: "văn",
            explanation: "Tục ngữ truyền thống: 'Tiên học lễ, hậu học văn'."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm đọc hiểu & Từ vựng",
        questions: [
          {
            id: "v2_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Từ nào dưới đây viết SAI chính tả g/gh hoặc ng/ngh?",
            options: ["nghiêng ngả", "ghế gỗ", "nghủ gật", "ghi chép"],
            correctAnswer: "nghủ gật",
            explanation: "Viết đúng phải là 'ngủ gật' (vì 'u' đi với 'ng', không đi với 'ngh')."
          },
          {
            id: "v2_p3_q2",
            type: "MULTIPLE_CHOICE",
            question: "Dấu câu nào dùng để kết thúc một CÂU HỎI?",
            options: ["Dấu chấm hỏi (?)", "Dấu chấm (.)", "Dấu phẩy (,)", "Dấu chấm cảm (!)"],
            correctAnswer: "Dấu chấm hỏi (?)",
            explanation: "Dấu chấm hỏi (?) được đặt ở cuối câu hỏi."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Vòng 3: Tuần 4, 5 - Mái ấm gia đình (Từ chỉ đặc điểm, Câu Ai là gì?)",
    semester: "HK1",
    difficulty: "dễ",
    topic: "Từ chỉ đặc điểm, Kiểu câu 'Ai là gì?'",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Từ đồng nghĩa, trái nghĩa)",
        questions: [
          {
            id: "v3_p1_matching",
            type: "MATCHING",
            title: "Ghép các cặp từ trái nghĩa với nhau",
            instruction: "Ghép các ô chứa từ trái nghĩa tương ứng:",
            pairs: [
              { id: "m1", left: "Chăm chỉ", right: "Lười biếng" },
              { id: "m2", left: "Yêu thương", right: "Ghét bỏ" },
              { id: "m3", left: "To lớn", right: "Nhỏ bé" },
              { id: "m4", left: "Hiền lành", right: "Hung dữ" },
              { id: "m5", left: "Vui vẻ", right: "Buồn bã" },
              { id: "m6", left: "Mới mẻ", right: "Cũ kỹ" },
              { id: "m7", left: "Gần gũi", right: "Xa cách" },
              { id: "m8", left: "Ngoan ngoãn", right: "Hư hỏng" },
              { id: "m9", left: "Sáng xẻo", right: "Tối mịt" },
              { id: "m10", left: "Gọn gàng", right: "Bừa bãi" },
            ],
            explanation: "Từ trái nghĩa là những từ có nghĩa đối lập hoàn toàn nhau."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Xếp câu Ai là gì?)",
        questions: [
          {
            id: "v3_p2_order1",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ thành câu giới thiệu (Ai là gì?):",
            words: ["là", "Bà nội", "người", "em", "kính yêu nhất."],
            correctSentence: "Bà nội là người em kính yêu nhất.",
            explanation: "Mẫu câu 'Ai là gì?' dùng để giới thiệu hoặc nhận xét về người/vật."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm ngữ pháp & từ ngữ gia đình",
        questions: [
          {
            id: "v3_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Trong câu 'Mẹ em rất hiền lành và chu đáo.', từ nào chỉ ĐẶC ĐIỂM?",
            options: ["hiền lành, chu đáo", "Mẹ em", "rất", "không có từ nào"],
            correctAnswer: "hiền lành, chu đáo",
            explanation: "'Hiền lành' và 'chu đáo' là những từ miêu tả đặc điểm tính nết của mẹ."
          },
          {
            id: "v3_p3_q2",
            type: "MULTIPLE_CHOICE",
            question: "Thành ngữ nào dưới đây nói về tình cảm anh chị em trong nhà?",
            options: ["Anh em như thể tay chân", "Uống nước nhớ nguồn", "Tôn sư trọng đạo", "Học thầy không tày học bạn"],
            correctAnswer: "Anh em như thể tay chân",
            explanation: "'Anh em như thể tay chân' khuyên anh chị em cùng nhà phải biết gắn bó, giúp đỡ lẫn nhau."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Vòng 4: Tuần 6, 7 - Kính thầy yêu bạn (Chính tả l/n, ch/tr, Dấu chấm, Dấu phẩy)",
    semester: "HK1",
    difficulty: "dễ",
    topic: "Chính tả l/n, ch/tr, Dấu chấm, Dấu phẩy",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại từ chỉ tính nết & từ chỉ hoạt động)",
        questions: [
          {
            id: "v4_p1_sort",
            type: "WORD_SORTING",
            title: "Xếp từ vào 2 giỏ thích hợp:",
            categories: [
              { id: "c1", name: "Từ chỉ phẩm chất / tính nết tốt" },
              { id: "c2", name: "Từ chỉ hoạt động học tập" }
            ],
            items: [
              { id: "i1", text: "Trung thực", categoryId: "c1" },
              { id: "i2", text: "Lắng nghe", categoryId: "c2" },
              { id: "i3", text: "Ngoan ngoãn", categoryId: "c1" },
              { id: "i4", text: "Thảo luận", categoryId: "c2" },
              { id: "i5", text: "Lễ phép", categoryId: "c1" },
              { id: "i6", text: "Phát biểu", categoryId: "c2" },
              { id: "i7", text: "Khiêm tốn", categoryId: "c1" },
              { id: "i8", text: "Viết chữ", categoryId: "c2" }
            ],
            explanation: "Ngoan ngoãn, lễ phép, trung thực, khiêm tốn là từ chỉ phẩm chất. Lắng nghe, thảo luận, phát biểu, viết chữ là từ chỉ hoạt động."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền từ vào chỗ trống (Chính tả ch/tr, l/n)",
        questions: [
          {
            id: "v4_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền 'ch' hoặc 'tr' vào chỗ trống: Bạn Nam rất ...ăm chỉ luyện viết chữ.",
            correctAnswer: "ch",
            explanation: "Chăm chỉ viết bằng chữ 'ch'."
          },
          {
            id: "v4_p2_fb2",
            type: "FILL_BLANKS",
            question: "Điền 'l' hoặc 'n' vào chỗ trống: Lớp em học tập ...ếp sống văn minh.",
            correctAnswer: "n",
            explanation: "Nếp sống viết bằng chữ 'n'."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm & Đố vui",
        questions: [
          {
            id: "v4_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Dấu phẩy trong câu 'Lan, Mai và Cúc là bạn thân.' có tác dụng gì?",
            options: ["Nối/ngăn cách các từ ngữ cùng loại (tên bạn học)", "Kết thúc câu hỏi", "Dùng để cảm thán", "Không có tác dụng gì"],
            correctAnswer: "Nối/ngăn cách các từ ngữ cùng loại (tên bạn học)",
            explanation: "Dấu phẩy dùng để ngăn cách các từ ngữ cùng giữ chức vụ trong câu."
          },
          {
            id: "v4_p3_q2",
            type: "RIDDLE",
            riddleText: "Mặt em vuông vức đen thun,\nThầy cô ghi chữ, em nằm lặng yên?\nLà cái gì?",
            options: ["Bảng đen", "Quyển vở", "Thước gỗ", "Cặp sách"],
            correctAnswer: "Bảng đen",
            explanation: "Bảng đen trong lớp học là nơi thầy cô viết phấn giảng bài."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Vòng 5: Tuần 8, 9 - Ngôi nhà thứ hai (Câu 'Ai làm gì?', Đọc hiểu)",
    semester: "HK1",
    difficulty: "trung-bình",
    topic: "Kiểu câu 'Ai làm gì?', Đọc hiểu văn bản",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Hổ con thiên tài (Sắp xếp câu 'Ai làm gì?')",
        questions: [
          {
            id: "v5_p1_order",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ ngữ sau thành câu hoàn chỉnh:",
            words: ["đang", "Các bạn học sinh", "trồng hoa", "ngoài vườn trường."],
            correctSentence: "Các bạn học sinh đang trồng hoa ngoài vườn trường.",
            explanation: "Mẫu câu 'Ai làm gì?' dùng để kể về hoạt động của con người hoặc vật."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Đọc hiểu văn bản ngắn",
        questions: [
          {
            id: "v5_p2_reading",
            type: "READING_COMPREHENSION",
            passageTitle: "Bài đọc: Ngôi trường mới",
            passageText: "Trường mới của em xây trên nền ngôi trường cũ bằng gỗ lợp lá. Mái trường đỏ thắm hiện lên sau lùm cây xanh ngắt. Vào lớp, em thấy tường vôi trắng tinh, bảng đen nhẵn bóng, bàn ghế gỗ xoan đào thơm phức. Em rất thích ngôi trường mới của mình.",
            subQuestions: [
              {
                id: "rc_1",
                question: "Ngôi trường mới của em có mái màu gì?",
                options: ["Đỏ thắm", "Xanh lam", "Vàng tươi", "Nâu đất"],
                correctAnswer: "Đỏ thắm",
                explanation: "Đoạn văn viết: 'Mái trường đỏ thắm hiện lên sau lùm cây xanh ngắt.'"
              },
              {
                id: "rc_2",
                question: "Bàn ghế trong lớp học được làm bằng gỗ gì?",
                options: ["Gỗ xoan đào", "Gỗ bàng", "Gỗ lim", "Gỗ tre"],
                correctAnswer: "Gỗ xoan đào",
                explanation: "Đoạn văn nêu rõ: 'bàn ghế gỗ xoan đào thơm phức.'"
              }
            ]
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt tổng hợp",
        questions: [
          {
            id: "v5_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Trong câu 'Chú chim sẻ đang bắt sâu trên cành cây.', từ ngữ nào trả lời cho câu hỏi 'Làm gì?'",
            options: ["đang bắt sâu trên cành cây", "Chú chim sẻ", "trên cành cây", "Chú chim"],
            correctAnswer: "đang bắt sâu trên cành cây",
            explanation: "Bộ phận trả lời cho câu hỏi 'Làm gì?' chứa từ chỉ hoạt động ('đang bắt sâu...')."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Vòng 6: Tuần 10, 11 - Tuổi nhỏ làm việc nhỏ (Chính tả s/x, iên/iêng)",
    semester: "HK1",
    difficulty: "trung-bình",
    topic: "Chính tả s/x, vần iên/iêng, Từ chỉ hoạt động tự phục vụ",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Nối vần & từ ngữ đúng)",
        questions: [
          {
            id: "v6_p1_match",
            type: "MATCHING",
            title: "Nối từ ngữ với nghĩa hoặc cách dùng phù hợp:",
            instruction: "Ghép ô bên trái với ô bên phải tương ứng:",
            pairs: [
              { id: "m1", left: "Siêng năng", right: "Cần cù làm việc" },
              { id: "m2", left: "Xanh xao", right: "Làn da kém hồng hào" },
              { id: "m3", left: "Tiên tiến", right: "Học sinh giỏi xuất sắc" },
              { id: "m4", left: "Cánh diều", right: "Bay cao trên bầu trời" },
              { id: "m5", left: "Củ riềng", right: "Gia vị trong bếp" },
              { id: "m6", left: "Xinh xắn", right: "Vẻ đẹp nhỏ nhắn" },
              { id: "m7", left: "Sạch sẽ", right: "Không có vết bẩn" },
              { id: "m8", left: "Tiếng hót", right: "Âm thanh của chim" },
              { id: "m9", left: "Sương mù", right: "Hơi nước mờ ảo" },
              { id: "m10", left: "Xóm làng", right: "Nơi dân cư sinh sống" },
            ],
            explanation: "Phân biệt quy tắc s/x và các vần iên/iêng trong vốn từ Tiếng Việt."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền vần iên hoặc iêng",
        questions: [
          {
            id: "v6_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền vần 'iên' hoặc 'iêng' vào chỗ trống: Đàn chim hót líu r... trong vòm lá.",
            correctAnswer: "iêu", // or iêng
            explanation: "Líu ríu hoặc líu lo, hoặc điền vần 'iêng' thành líu riêng (líu lo/líu ríu)."
          },
          {
            id: "v6_p2_fb2",
            type: "FILL_BLANKS",
            question: "Điền vần 'iên' hay 'iêng': Bạn An rất ngoan t... tuyệt vời.",
            correctAnswer: "iên",
            explanation: "Ngoan tiên (ngoan ngoãn)."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt",
        questions: [
          {
            id: "v6_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Câu ca dao: 'Tuổi nhỏ làm việc nhỏ / Tùy theo sức của mình' là lời dặn của ai?",
            options: ["Bác Hồ", "Thầy cô giáo", "Anh Kim Đồng", "Võ Thị Sáu"],
            correctAnswer: "Bác Hồ",
            explanation: "Bác Hồ dặn thiếu niên nhi đồng: 'Tuổi nhỏ làm việc nhỏ / Tùy theo sức của mình'."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Vòng 7: Tuần 12, 13 - Ước mơ tuổi thơ (Câu 'Ai thế nào?', Dấu chấm cảm)",
    semester: "HK1",
    difficulty: "trung-bình",
    topic: "Kiểu câu 'Ai thế nào?', Dấu chấm cảm (!), Từ chỉ đặc điểm",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại 3 kiểu câu Lớp 2)",
        questions: [
          {
            id: "v7_p1_sort",
            type: "WORD_SORTING",
            title: "Phân loại các câu sau vào đúng nhóm mẫu câu:",
            categories: [
              { id: "c_lagi", name: "Câu 'Ai là gì?'" },
              { id: "c_lamgi", name: "Câu 'Ai làm gì?'" },
              { id: "c_thenao", name: "Câu 'Ai thế nào?'" }
            ],
            items: [
              { id: "i1", text: "Nam là lớp trưởng lớp 2A.", categoryId: "c_lagi" },
              { id: "i2", text: "Bé Mai đang quét nhà.", categoryId: "c_lamgi" },
              { id: "i3", text: "Bông hoa hồng nở rất đẹp.", categoryId: "c_thenao" },
              { id: "i4", text: "Mẹ em là bác sĩ giỏi.", categoryId: "c_lagi" },
              { id: "i5", text: "Đàn em nhỏ vui múa hát.", categoryId: "c_lamgi" },
              { id: "i6", text: "Bầu trời thu xanh trong.", categoryId: "c_thenao" }
            ],
            explanation: "Ba kiểu câu cơ bản Lớp 2: 'Ai là gì?' (giới thiệu), 'Ai làm gì?' (hoạt động), 'Ai thế nào?' (đặc điểm/trạng thái)."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Xếp câu cảm)",
        questions: [
          {
            id: "v7_p2_order",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ thành câu bộc lộ cảm xúc (Câu cảm):",
            words: ["Ôi,", "bông hoa hồng", "đẹp quá!"],
            correctSentence: "Ôi, bông hoa hồng đẹp quá!",
            explanation: "Câu cảm thường có các từ: Ôi, chao ôi, quá, lắm... và kết thúc bằng dấu chấm cảm (!)."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Dấu câu",
        questions: [
          {
            id: "v7_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Dấu câu nào đặt ở cuối câu bộc lộ cảm xúc vui mừng, ngạc nhiên?",
            options: ["Dấu chấm cảm (!)", "Dấu chấm (.)", "Dấu chấm hỏi (?)", "Dấu phẩy (,)"],
            correctAnswer: "Dấu chấm cảm (!)",
            explanation: "Dấu chấm cảm (!) được dùng ở cuối câu cảm để thể hiện cảm xúc."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Vòng 8: Tuần 14, 15 - Thiên nhiên tươi đẹp (Chính tả r/d/gi, uôn/uông)",
    semester: "HK1",
    difficulty: "trung-bình",
    topic: "Chính tả r/d/gi, uôn/uông, Từ ngữ chỉ thiên nhiên",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Ghép từ chỉ thiên nhiên)",
        questions: [
          {
            id: "v8_p1_match",
            type: "MATCHING",
            title: "Nối từ chỉ hiện tượng thiên nhiên với đặc điểm tương ứng:",
            instruction: "Ghép ô tương ứng:",
            pairs: [
              { id: "m1", left: "Ánh nắng", right: "Chói chang mùa hè" },
              { id: "m2", left: "Cơn mưa", right: "Rào rạt rớt xuống" },
              { id: "m3", left: "Làn gió", right: "Mát rượi thổi qua" },
              { id: "m4", left: "Con sông", right: "Uốn lượn hiền hòa" },
              { id: "m5", left: "Ngọn núi", right: "Sừng sững cao vút" },
              { id: "m6", left: "Bầu trời", right: "Xanh bao la" },
              { id: "m7", left: "Cánh đồng", right: "Lúa chín vàng rực" },
              { id: "m8", left: "Mây trắng", right: "Bềnh bồng trôi" },
              { id: "m9", left: "Sóng biển", right: "Rì rào vỗ bờ" },
              { id: "m10", left: "Rừng cây", right: "Xanh bạt ngàn" },
            ],
            explanation: "Từ ngữ miêu tả cảnh sắc thiên nhiên đất nước."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền r/d/gi hoặc uôn/uông",
        questions: [
          {
            id: "v8_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền 'r', 'd' hoặc 'gi': Con sông uốn lượn ...uốt theo chân núi.",
            correctAnswer: "d",
            explanation: "Dọc (dọc theo chân núi) hoặc dốt (dọc)."
          },
          {
            id: "v8_p2_fb2",
            type: "FILL_BLANKS",
            question: "Điền 'uôn' hay 'uông': Cánh đồng lúa chín vàng r... .",
            correctAnswer: "uông",
            explanation: "Vàng rượm / ruộng."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt",
        questions: [
          {
            id: "v8_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Từ nào dưới đây viết ĐÚNG chính tả?",
            options: ["uốn lượn", "uống lượn", "uốn lượng", "uống lượng"],
            correctAnswer: "uốn lượn",
            explanation: "Dòng sông uốn lượn mềm mại."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Vòng 9: Tuần 16, 17 - Sơ kết Học kỳ 1 (Ôn tập tổng hợp HK1)",
    semester: "HK1",
    difficulty: "trung-bình",
    topic: "Ôn tập tổng hợp Học kỳ 1",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại từ ngữ toàn diện HK1)",
        questions: [
          {
            id: "v9_p1_sort",
            type: "WORD_SORTING",
            title: "Phân loại từ ngữ vào 3 nhóm:",
            categories: [
              { id: "c_sv", name: "Từ chỉ Sự vật" },
              { id: "c_hd", name: "Từ chỉ Hoạt động" },
              { id: "c_dd", name: "Từ chỉ Đặc điểm" }
            ],
            items: [
              { id: "i1", text: "Trường học", categoryId: "c_sv" },
              { id: "i2", text: "Múa hát", categoryId: "c_hd" },
              { id: "i3", text: "Xanh tươi", categoryId: "c_dd" },
              { id: "i4", text: "Thầy cô", categoryId: "c_sv" },
              { id: "i5", text: "Lắng nghe", categoryId: "c_hd" },
              { id: "i6", text: "Chăm chỉ", categoryId: "c_dd" }
            ],
            explanation: "Ba nhóm từ quan trọng nhất chương trình Lớp 2 HK1."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp thành ngữ ca dao)",
        questions: [
          {
            id: "v9_p2_order",
            type: "WORD_ORDERING",
            instruction: "Xếp các từ thành tục ngữ dạy học sinh:",
            words: ["Học thầy", "không tày", "học bạn."],
            correctSentence: "Học thầy không tày học bạn.",
            explanation: "Tục ngữ khuyên vừa học ở thầy cô, vừa học hỏi thêm từ bạn bè xung quanh."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm tổng kết HK1",
        questions: [
          {
            id: "v9_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Câu nào dưới đây là câu nêu ĐẶC ĐIỂM?",
            options: ["Mái tóc bà em đã bạc phơ.", "Nam đang đọc sách ở thư viện.", "Mẹ em là cô giáo.", "Chú chim hót véo von."],
            correctAnswer: "Mái tóc bà em đã bạc phơ.",
            explanation: "'Bạc phơ' trả lời cho câu hỏi 'Thế nào?'."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Vòng 10: Vòng thi Thi Huyện / Thi Đội tuyển HK1 (Độ khó cao)",
    semester: "HK1",
    difficulty: "khó",
    topic: "Đề thi thử Trạng Nguyên cấp Trường / Huyện Học kỳ 1",
    timeLimitMinutes: 25,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (10 cặp từ nâng cao HK1)",
        questions: [
          {
            id: "v10_p1_match",
            type: "MATCHING",
            title: "Ghép các vế câu ca dao, thành ngữ hoàn chỉnh:",
            instruction: "Nối vế đầu và vế sau của ca dao tục ngữ:",
            pairs: [
              { id: "m1", left: "Công cha như núi Thái Sơn", right: "Nghĩa mẹ như nước trong nguồn chảy ra" },
              { id: "m2", left: "Một lòng thờ mẹ kính cha", right: "Cho tròn chữ hiếu mới là đạo con" },
              { id: "m3", left: "Thất bại là", right: "Mẹ thành công" },
              { id: "m4", left: "Có công mài sắt", right: "Có ngày nên kim" },
              { id: "m5", left: "Kính trên", right: "Nhường dưới" },
              { id: "m6", left: "Lá lành", right: "Đùm lá rách" },
              { id: "m7", left: "Thương người", right: "Như thể thương thân" },
              { id: "m8", left: "Uống nước", right: "Nhớ nguồn" },
              { id: "m9", left: "Tôn sư", right: "Trọng đạo" },
              { id: "m10", left: "Đi một ngày đàng", right: "Học một sàng khôn" },
            ],
            explanation: "Thành ngữ ca dao tục ngữ kho tàng dân gian Việt Nam."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền từ khó & giải đố chữ",
        questions: [
          {
            id: "v10_p2_riddle",
            type: "RIDDLE",
            riddleText: "Để nguyên giúp bé đọc bài,\nThêm sắc thành vật gõ hoài giục đi học?\nLà từ gì?",
            options: ["Sách - Sắc", "Bảng - Báng", "Trống - Trống", "Vở - Vớ"],
            correctAnswer: "Sách - Sắc",
            explanation: "Để nguyên là 'sách' (đọc bài), thêm sắc thành 'sách' -> 'Trống' hoặc 'Sách'."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt nâng cao",
        questions: [
          {
            id: "v10_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Trong câu 'Hoa phượng đỏ rực một góc trời vào mùa hạ.', từ ngữ trả lời cho câu hỏi 'Khi nào?' là từ nào?",
            options: ["vào mùa hạ", "Hoa phượng", "đỏ rực", "một góc trời"],
            correctAnswer: "vào mùa hạ",
            explanation: "'Vào mùa hạ' chỉ thời gian, trả lời cho câu hỏi 'Khi nào?'."
          }
        ]
      }
    ]
  },

  // ===================== HỌC KỲ 2 (VÒNG 11 - 19) =====================
  {
    id: 11,
    title: "Vòng 11: Tuần 19, 20 - Mùa xuân tươi đẹp (Mở rộng vốn từ Mùa xuân, Từ trái nghĩa)",
    semester: "HK2",
    difficulty: "dễ",
    topic: "Chủ đề Mùa xuân, Từ trái nghĩa, Dấu câu",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Từ ngữ về mùa xuân)",
        questions: [
          {
            id: "v11_p1_match",
            type: "MATCHING",
            title: "Nối từ chỉ đặc điểm thời tiết với các mùa trong năm:",
            instruction: "Ghép ô bên trái với ô bên phải tương ứng:",
            pairs: [
              { id: "m1", left: "Mùa xuân", right: "Ấm áp, mưa xuân lất phất" },
              { id: "m2", left: "Mùa hạ", right: "Oi nồng, nắng chói chang" },
              { id: "m3", left: "Mùa thu", right: "Mát mẻ, heo may nhẹ thổi" },
              { id: "m4", left: "Mùa đông", right: "Lạnh giá, gió bấc tràn về" },
              { id: "m5", left: "Hoa đào", right: "Nở rộ miền Bắc đón Tết" },
              { id: "m6", left: "Hoa mai", right: "Vàng rực miền Nam đón Tết" },
              { id: "m7", left: "Chim én", right: "Báo hiệu mùa xuân về" },
              { id: "m8", left: "Bánh chưng", right: "Tượng trưng cho Đất" },
              { id: "m9", left: "Bánh giầy", right: "Tượng trưng cho Trời" },
              { id: "m10", left: "Mùng một Tết", right: "Tết Cha mẹ thầy cô" },
            ],
            explanation: "Từ ngữ gợi nhớ phong tục tập quán ngày Tết và phong cảnh Mùa Xuân."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền vần/từ về Mùa xuân",
        questions: [
          {
            id: "v11_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền chữ còn thiếu: Mùa xuân đến mang theo sức s... tươi mới.",
            correctAnswer: "ống",
            explanation: "Sức sống tươi mới."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt",
        questions: [
          {
            id: "v11_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Cây hoa nào thường nở vào mùa xuân ở miền Bắc nước ta?",
            options: ["Hoa đào", "Hoa mai", "Hoa phượng", "Hoa cúc họa mi"],
            correctAnswer: "Hoa đào",
            explanation: "Hoa đào nở đỏ hồng trong khí trời ấm áp mùa xuân miền Bắc."
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Vòng 12: Tuần 21, 22 - Loài vật quanh ta (Từ chỉ loài vật, Từ chỉ tiếng kêu)",
    semester: "HK2",
    difficulty: "trung-bình",
    topic: "Chủ đề Bốn chân & Cánh bay, Từ chỉ hoạt động/tiếng kêu loài vật",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại gia súc, gia cầm, thú rừng)",
        questions: [
          {
            id: "v12_p1_sort",
            type: "WORD_SORTING",
            title: "Xếp tên các con vật vào đúng nhóm:",
            categories: [
              { id: "c_vatchi", name: "Vật nuôi trong nhà (Gia súc, gia cầm)" },
              { id: "c_thurung", name: "Thú rừng hoang dã" }
            ],
            items: [
              { id: "i1", text: "Con gà trống", categoryId: "c_vatchi" },
              { id: "i2", text: "Con hổ", categoryId: "c_thurung" },
              { id: "i3", text: "Con chó cún", categoryId: "c_vatchi" },
              { id: "i4", text: "Con voi", categoryId: "c_thurung" },
              { id: "i5", text: "Con trâu", categoryId: "c_vatchi" },
              { id: "i6", text: "Con hươu cao cổ", categoryId: "c_thurung" }
            ],
            explanation: "Động vật nuôi hiền lành vs Động vật hoang dã sống trong rừng."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp tiếng kêu con vật)",
        questions: [
          {
            id: "v12_p2_order",
            type: "WORD_ORDERING",
            instruction: "Xếp các từ thành câu mô tả tiếng chim hót:",
            words: ["Chú chim sâu", "hót líu lo", "trên cành chanh."],
            correctSentence: "Chú chim sâu hót líu lo trên cành chanh.",
            explanation: "Từ 'líu lo' miêu tả âm thanh tiếng chim hót hay và trong trẻo."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm loài vật",
        questions: [
          {
            id: "v12_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Con vật nào dưới đây được mệnh danh là 'Chúa tể rừng xanh'?",
            options: ["Con hổ (Cọp)", "Con thỏ", "Con sóc", "Con hươu"],
            correctAnswer: "Con hổ (Cọp)",
            explanation: "Con hổ với sức mạnh vượt trội được gọi là Chúa tể rừng xanh."
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Vòng 13: Tuần 23, 24 - Thế giới cây xanh (Từ chỉ cây cối, bộ phận cây)",
    semester: "HK2",
    difficulty: "trung-bình",
    topic: "Chủ đề Loài cây, Từ chỉ bộ phận của cây",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Nối hoa quả & cây)",
        questions: [
          {
            id: "v13_p1_match",
            type: "MATCHING",
            title: "Ghép hoa / quả với đặc điểm tương ứng:",
            instruction: "Nối hai ô thích hợp:",
            pairs: [
              { id: "m1", left: "Quả chuối chín", right: "Vàng ươm, ngọt lịm" },
              { id: "m2", left: "Quả dừa", right: "Mát lành ngọt nước" },
              { id: "m3", left: "Quả ớt", right: "Đỏ tươi, vị cay xè" },
              { id: "m4", left: "Rễ cây", right: "Hút chất dinh dưỡng nuôi cây" },
              { id: "m5", left: "Thân cây", right: "Dẫn nước lên lá" },
              { id: "m6", left: "Lá cây xanh", right: "Quang hợp dưới ánh nắng" },
              { id: "m7", left: "Hoa hồng", right: "Tỏa hương thơm ngát" },
              { id: "m8", left: "Quả bưởi", right: "Tròn xoe căng mộng" },
              { id: "m9", left: "Cây tre", right: "Thẳng đứng, dẻo dai" },
              { id: "m10", left: "Cây bàng", right: "Xòe tán rộng che mát" },
            ],
            explanation: "Từ ngữ sinh học thực vật quen thuộc với thiếu nhi."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền từ vào ô trống",
        questions: [
          {
            id: "v13_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền chữ còn thiếu: Cây xanh hấp thụ khí các-bon-nic và thải ra khí ô-...i.",
            correctAnswer: "xy",
            explanation: "Cây xanh nhả khí ô-xy giúp con người hít thở không khí trong lành."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt",
        questions: [
          {
            id: "v13_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Bộ phận nào của cây nằm sâu dưới lòng đất giúp giữ cây không bị đổ?",
            options: ["Rễ cây", "Lá cây", "Nụ hoa", "Cành cây"],
            correctAnswer: "Rễ cây",
            explanation: "Rễ cây bám chặt vào lòng đất giữ cây đứng vững."
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Vòng 14: Tuần 25, 26 - Đất nước Việt Nam (Từ chỉ quê hương, Địa danh Việt Nam)",
    semester: "HK2",
    difficulty: "trung-bình",
    topic: "Chủ đề Quê hương, Đất nước, Lịch sử Việt Nam",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại danh từ riêng & danh từ chung)",
        questions: [
          {
            id: "v14_p1_sort",
            type: "WORD_SORTING",
            title: "Phân loại Tên riêng địa danh & Từ ngữ chỉ cảnh vật:",
            categories: [
              { id: "c_tenrieng", name: "Tên riêng địa danh (Viết hoa)" },
              { id: "c_tuchung", name: "Từ ngữ chỉ cảnh vật chung" }
            ],
            items: [
              { id: "i1", text: "Hà Nội", categoryId: "c_tenrieng" },
              { id: "i2", text: "dòng sông", categoryId: "c_tuchung" },
              { id: "i3", text: "Sông Hồng", categoryId: "c_tenrieng" },
              { id: "i4", text: "ngọn núi", categoryId: "c_tuchung" },
              { id: "i5", text: "Thành phố Hồ Chí Minh", categoryId: "c_tenrieng" },
              { id: "i6", text: "cánh đồng", categoryId: "c_tuchung" }
            ],
            explanation: "Quy tắc viết hoa Tên địa lý Việt Nam theo ngữ pháp Lớp 2."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp câu yêu quê hương)",
        questions: [
          {
            id: "v14_p2_order",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ thành câu thể hiện lòng tự hào dân tộc:",
            words: ["Việt Nam", "là quê hương", "tươi đẹp", "của em."],
            correctSentence: "Việt Nam là quê hương tươi đẹp của em.",
            explanation: "Tình yêu quê hương đất nước Việt Nam."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Địa lý & Tiếng Việt",
        questions: [
          {
            id: "v14_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là thành phố nào?",
            options: ["Thành phố Hà Nội", "Thành phố Hồ Chí Minh", "Thành phố Đà Nẵng", "Thành phố Cần Thơ"],
            correctAnswer: "Thành phố Hà Nội",
            explanation: "Hà Nội là thủ đô ngàn năm văn hiến của Việt Nam."
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Vòng 15: Tuần 27, 28 - Bác Hồ kính yêu (Thơ về Bác Hồ, Câu khiến)",
    semester: "HK2",
    difficulty: "khó",
    topic: "Chủ đề Bác Hồ, Câu khiến (yêu cầu, đề nghị)",
    timeLimitMinutes: 20,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Bài thơ Lăng Bác & Bác Hồ)",
        questions: [
          {
            id: "v15_p1_match",
            type: "MATCHING",
            title: "Nối câu thơ câu văn đúng nghĩa về Bác Hồ:",
            instruction: "Ghép 2 vế thơ hoàn chỉnh:",
            pairs: [
              { id: "m1", left: "Tháp Mười đẹp nhất bông sen", right: "Việt Nam đẹp nhất có tên Bác Hồ" },
              { id: "m2", left: "Bác Hồ thiếu nhi ai bằng", right: "Bác yêu thiếu nhi lắm" },
              { id: "m3", left: "Lăng Bác Hồ", right: "Ở giữa Quảng trường Ba Đình" },
              { id: "m4", left: "Năm điều Bác Hồ dạy", right: "Kim chỉ nam cho thiếu niên" },
              { id: "m5", left: "Trung thực, thật thà", right: "Dũng cảm" },
              { id: "m6", left: "Học tập tốt", right: "Lao động tốt" },
              { id: "m7", left: "Đoàn kết tốt", right: "Kỷ luật tốt" },
              { id: "m8", left: "Giữ gìn vệ sinh", right: "Thật tốt" },
              { id: "m9", left: "Khiêm tốn, thật thà", right: "Dũng cảm" },
              { id: "m10", left: "Bác Hồ sinh ngày", right: "19 tháng 5 năm 1890" },
            ],
            explanation: "Bài học ghi nhớ công ơn vĩ đại của Bác Hồ kính yêu."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Điền từ vào 5 Điều Bác Hồ dạy",
        questions: [
          {
            id: "v15_p2_fb1",
            type: "FILL_BLANKS",
            question: "Điền từ còn thiếu vào 5 điều Bác Hồ dạy: 'Yêu Tổ quốc, yêu ... bào'.",
            correctAnswer: "đồng",
            explanation: "Điều 1: Yêu Tổ quốc, yêu đồng bào."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Câu khiến",
        questions: [
          {
            id: "v15_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Câu nào dưới đây là CÂU KHIẾN (dùng để yêu cầu, đề nghị)?",
            options: ["Chúng mình hãy cùng nhau giữ gìn vệ sinh trường lớp nhé!", "Bạn Nam học rất giỏi.", "Cái cặp sách này là của ai?", "Mặt trời mọc ở hướng đông."],
            correctAnswer: "Chúng mình hãy cùng nhau giữ gìn vệ sinh trường lớp nhé!",
            explanation: "Câu khiến chứa các từ 'hãy, đi, nào, nhé...' dùng để đưa ra lời khuyên hoặc yêu cầu."
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Vòng 16: Tuần 29, 30 - Ôn tập Thi Hương (Vòng thi Cấp Tỉnh/Thành phố)",
    semester: "HK2",
    difficulty: "khó",
    topic: "Đề thi thử Trạng Nguyên Thi Hương (Nâng cao toàn diện)",
    timeLimitMinutes: 25,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại từ vựng & ngữ pháp nâng cao)",
        questions: [
          {
            id: "v16_p1_sort",
            type: "WORD_SORTING",
            title: "Phân loại 3 kiểu câu Lớp 2 nâng cao:",
            categories: [
              { id: "c1", name: "Câu 'Ai là gì?'" },
              { id: "c2", name: "Câu 'Ai làm gì?'" },
              { id: "c3", name: "Câu 'Ai thế nào?'" }
            ],
            items: [
              { id: "i1", text: "Mẹ em là người phụ nữ đảm đang.", categoryId: "c1" },
              { id: "i2", text: "Bác nông dân đang gặt lúa trên đồng.", categoryId: "c2" },
              { id: "i3", text: "Rạn san hô dưới biển đẹp rực rỡ.", categoryId: "c3" },
              { id: "i4", text: "Chim công xòe đuôi múa.", categoryId: "c2" },
              { id: "i5", text: "Sách là người bạn tốt của em.", categoryId: "c1" },
              { id: "i6", text: "Thời tiết hôm nay rất dễ chịu.", categoryId: "c3" }
            ],
            explanation: "Vận dụng thành thạo 3 kiểu câu chuẩn GDPT 2018."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp câu thơ tả cảnh)",
        questions: [
          {
            id: "v16_p2_order",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ thành câu thơ tả cánh đồng:",
            words: ["Cánh đồng lúa", "chín vàng rực", "dưới nắng hè."],
            correctSentence: "Cánh đồng lúa chín vàng rực dưới nắng hè.",
            explanation: "Cảnh đẹp đồng quê Việt Nam mùa thu hoạch."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt Thi Hương",
        questions: [
          {
            id: "v16_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Trong câu 'Mẹ vội vã đi làm khi trời còn chưa sáng.', từ nào trả lời cho câu hỏi 'Khi nào?'",
            options: ["khi trời còn chưa sáng", "Mẹ vội vã", "đi làm", "trời chưa sáng"],
            correctAnswer: "khi trời còn chưa sáng",
            explanation: "Thành phần chỉ thời gian trả lời cho câu hỏi 'Khi nào?'."
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Vòng 17: Tuần 31, 32 - Ôn tập Thi Hội (Vòng thi Cấp Toàn Quốc)",
    semester: "HK2",
    difficulty: "khó",
    topic: "Đề thi thử Trạng Nguyên Thi Hội (Chính tả, Từ nghĩa rộng, Văn miêu tả)",
    timeLimitMinutes: 25,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (10 cặp từ nghĩa rộng & đố chữ)",
        questions: [
          {
            id: "v17_p1_match",
            type: "MATCHING",
            title: "Ghép cặp từ ngữ tương ứng:",
            instruction: "Ghép 2 ô thích hợp:",
            pairs: [
              { id: "m1", left: "Tập đọc", right: "Luyện đọc diễn cảm" },
              { id: "m2", left: "Chính tả", right: "Rèn kĩ năng viết đúng" },
              { id: "m3", left: "Luyện từ và câu", right: "Mở rộng vốn từ ngữ" },
              { id: "m4", left: "Tập làm văn", right: "Viết đoạn văn ngắn" },
              { id: "m5", left: "Từ đồng nghĩa", right: "Từ có nghĩa giống nhau" },
              { id: "m6", left: "Từ trái nghĩa", right: "Từ có nghĩa đối lập" },
              { id: "m7", left: "Dấu chấm", right: "Kết thúc câu kể" },
              { id: "m8", left: "Dấu chấm hỏi", right: "Kết thúc câu hỏi" },
              { id: "m9", left: "Dấu chấm cảm", right: "Kết thúc câu bộc lộ cảm xúc" },
              { id: "m10", left: "Dấu phẩy", right: "Ngăn cách các bộ phận cùng chức vụ" },
            ],
            explanation: "Các môn học & kiến thức nền tảng trong chương trình Tiếng Việt Lớp 2."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Giải đố vui Trạng Nguyên nâng cao",
        questions: [
          {
            id: "v17_p2_riddle",
            type: "RIDDLE",
            riddleText: "Để nguyên làm bạn với học sinh,\nThêm sắc rực rỡ bừng lên mỗi chiều?\nLà hai từ nào?",
            options: ["Bảng - Báng", "Vở - Vớ", "Bút - Bút", "Sách - Sắc"],
            correctAnswer: "Sách - Sắc",
            explanation: "Để nguyên là 'sách', thêm sắc là 'sách' (sắc màu)."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tiếng Việt Thi Hội",
        questions: [
          {
            id: "v17_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Từ nào dưới đây KHÔNG cùng nhóm với các từ còn lại?",
            options: ["chạy bộ", "bơi lội", "đá bóng", "xinh đẹp"],
            correctAnswer: "xinh đẹp",
            explanation: "'Xinh đẹp' là từ chỉ đặc điểm. Ba từ còn lại là từ chỉ hoạt động thể thao."
          }
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Vòng 18: Tuần 33, 34 - Luyện giải đề Thi Đình (Vòng chung kết toàn quốc)",
    semester: "HK2",
    difficulty: "khó",
    topic: "Đề thi thử Trạng Nguyên Thi Đình (Độ khó cao nhất)",
    timeLimitMinutes: 30,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Trâu vàng bác học (Phân loại câu theo mục đích nói)",
        questions: [
          {
            id: "v18_p1_sort",
            type: "WORD_SORTING",
            title: "Phân loại các câu theo mục đích nói:",
            categories: [
              { id: "c_ke", name: "Câu kể (nhận xét, miêu tả)" },
              { id: "c_hoi", name: "Câu hỏi" },
              { id: "c_khien", name: "Câu khiến / Câu cảm" }
            ],
            items: [
              { id: "i1", text: "Hôm nay thời tiết thật đẹp mát mẻ.", categoryId: "c_ke" },
              { id: "i2", text: "Mấy giờ lớp mình bắt đầu học toán?", categoryId: "c_hoi" },
              { id: "i3", text: "Ôi, chú gấu bông này xinh xắn quá!", categoryId: "c_khien" },
              { id: "i4", text: "Con hãy học bài xong rồi đi ngủ nhé!", categoryId: "c_khien" },
              { id: "i5", text: "Cánh đồng lúa chín trải dài mênh mông.", categoryId: "c_ke" },
              { id: "i6", text: "Bạn đã làm xong bài tập Tiếng Việt chưa?", categoryId: "c_hoi" }
            ],
            explanation: "Phân biệt mục đích nói của các loại câu cơ bản."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Hổ con thiên tài (Sắp xếp khổ thơ hoàn chỉnh)",
        questions: [
          {
            id: "v18_p2_order",
            type: "WORD_ORDERING",
            instruction: "Sắp xếp từ thành câu ca dao đẹp về con người Việt Nam:",
            words: ["Nhiễu điều", "phủ lấy giá gương", "Người trong một nước", "phải thương nhau cùng."],
            correctSentence: "Nhiễu điều phủ lấy giá gương Người trong một nước phải thương nhau cùng.",
            explanation: "Ca dao nhắc nhở người cùng một nước phải biết đoàn kết yêu thương nhau."
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Thi Đình toàn quốc",
        questions: [
          {
            id: "v18_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Dãy từ nào sau đây gồm toàn từ chỉ TÌNH CẢM GIA ĐÌNH?",
            options: ["yêu thương, quý mến, hiếu thảo, săn sóc", "học tập, múa hát, chạy nhảy, vui chơi", "đỏ thắm, xanh tươi, to lớn, cao ráo", "thước kẻ, bút chì, sách vở, cặp sách"],
            correctAnswer: "yêu thương, quý mến, hiếu thảo, săn sóc",
            explanation: "Gồm toàn từ ngữ thể hiện tình cảm ruột thịt trong gia đình."
          }
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Vòng 19: Tuần 35 - Đề Thi Chung Kết Trạng Nguyên Tiếng Việt Lớp 2",
    semester: "HK2",
    difficulty: "khó",
    topic: "Đề thi Tổng duyệt Chung kết Trạng Nguyên Lớp 2 (Toàn bộ kiến thức năm học GDPT 2018)",
    timeLimitMinutes: 30,
    parts: [
      {
        partNumber: 1,
        partName: "Phần 1: Mèo con nhanh trí (Chung kết 10 cặp từ)",
        questions: [
          {
            id: "v19_p1_match",
            type: "MATCHING",
            title: "Ghép cặp từ ngữ tuyệt đối chính xác:",
            instruction: "Nối 10 cặp từ:",
            pairs: [
              { id: "m1", left: "Trạng Nguyên", right: "Thủ khoa kì thi ngày xưa" },
              { id: "m2", left: "Bảng Nhãn", right: "Đỗ thứ nhì kì thi" },
              { id: "m3", left: "Thám Hoa", right: "Đỗ thứ ba kì thi" },
              { id: "m4", left: "Tiến Sĩ", right: "Người thi đỗ đại khoa" },
              { id: "m5", left: "Văn Miếu Quốc Tử Giám", right: "Trường đại học đầu tiên của Việt Nam" },
              { id: "m6", left: "Bia Tiến Sĩ", right: "Ghi danh những người đỗ đạc" },
              { id: "m7", left: "Chu Văn An", right: "Thầy giáo vĩ đại thời Trần" },
              { id: "m8", left: "Hiền tài", right: "Is là nguyên khí quốc gia" },
              { id: "m9", left: "Học đi đôi với hành", right: "Nguyên lý giáo dục" },
              { id: "m10", left: "Uống nước nhớ nguồn", right: "Đạo lý truyền thống Việt Nam" },
            ],
            explanation: "Sự tích & truyền thống hiếu học của dân tộc Việt Nam."
          }
        ]
      },
      {
        partNumber: 2,
        partName: "Phần 2: Đọc hiểu bài thơ 'Mẹ của em'",
        questions: [
          {
            id: "v19_p2_reading",
            type: "READING_COMPREHENSION",
            passageTitle: "Bài thơ: Mẹ của em",
            passageText: "Nắng hạ tắt ngấm rồi\nTrăng rằm soi ngõ vắng\nMẹ ngồi quạt cho con\nGió về trong giấc đầm.\nLớn lên con mới hiểu\nBàn tay mẹ dịu êm\nChe chở suốt cuộc đời\nCho con thành người ngoan.",
            subQuestions: [
              {
                id: "rc_19_1",
                question: "Người mẹ trong bài thơ làm gì để con ngủ ngon?",
                options: ["Quạt mát cho con", "Hát ru cho con", "Đọc truyện cho con", "Cho con uống sữa"],
                correctAnswer: "Quạt mát cho con",
                explanation: "Bài thơ ghi: 'Mẹ ngồi quạt cho con / Gió về trong giấc đầm.'"
              },
              {
                id: "rc_19_2",
                question: "Hình ảnh 'Bàn tay mẹ dịu êm' thể hiện điều gì?",
                options: ["Tình yêu thương che chở của mẹ dành cho con", "Mẹ rất giỏi quạt mát", "Mẹ có bàn tay mềm mại", "Trăng rằm rất sáng"],
                correctAnswer: "Tình yêu thương che chở của mẹ dành cho con",
                explanation: "Bàn tay mẹ tượng trưng cho tình yêu thương bao la và sự hy sinh nâng đỡ con trưởng thành."
              }
            ]
          }
        ]
      },
      {
        partNumber: 3,
        partName: "Phần 3: Trắc nghiệm Tổng duyệt Trạng Nguyên",
        questions: [
          {
            id: "v19_p3_q1",
            type: "MULTIPLE_CHOICE",
            question: "Trong các từ sau, từ nào dùng để chỉ người đỗ THỦ KHOA trong kì thi Đình ngày xưa?",
            options: ["Trạng Nguyên", "Bảng Nhãn", "Thám Hoa", "Cử Nhân"],
            correctAnswer: "Trạng Nguyên",
            explanation: "Trạng Nguyên là danh hiệu cao quý nhất trao cho vị thủ khoa thi Đình."
          },
          {
            id: "v19_p3_q2",
            type: "FILL_BLANKS",
            question: "Điền chữ còn thiếu vào câu thành ngữ: 'Trăm hay không bằng tay ... '",
            correctAnswer: "quen",
            explanation: "Thành ngữ: 'Trăm hay không bằng tay quen' khuyên chúng ta siêng năng thực hành."
          }
        ]
      }
    ]
  }
];
