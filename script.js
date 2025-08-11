// Array of 10 questions with 5 hints + 1 answer
const questions = [
  // 1
  {
    hints: [
      "لاہور کا نشان",
      "ٹاور",
      "اقبال پارک میں",
      "تاریخی قرارداد",
      "پاکستان کی پہچان",
    ],
    answer: "مینارِ پاکستان",
  },
  // 2
  {
    hints: [
      "پہلے وزیراعظم",
      "شہید ملت",
      "قوم کے سردار",
      "قائد اعظم کے ساتھی",
      "لیاقت باغ",
    ],
    answer: "لیاقت علی خان",
  },
  // 3
  {
    hints: [
      "بادشاہ",
      "بڑی بلی",
      "سنہری شان",
      "زور سے دھاڑتا ہے",
      "جھنڈ میں رہتا ہے",
    ],
    answer: "شیر",
  },
  // 4
  {
    hints: [
      "کراچی میں واقع",
      "پاکستان کی پہلی بلند عمارت",
      "تمیر 1970",
      "بینکنگ سیکٹر کی علامت",
      "بینک کا ہیڈکوارٹر",
    ],
    answer: "حبیب بینک پلازہ",
  },
  // 5
  {
    hints: [
      "مادر ملت",
      "قائداعظم کی بہن",
      "سیاستدان و ڈینٹسٹ",
      "1965 میں انتخاب لڑا",
      "مزار کراچی",
    ],
    answer: "فاطمہ جناح",
  },
  // 6
  {
    hints: [
      "پیلا پھل",
      "موڑا ہوا",
      "چھلکا اتارو",
      "بندر پسند کرتے ہیں",
      "پوٹاشیم سے بھرپور",
    ],
    answer: "کیلا",
  },
  // 7
  {
    hints: [
      "سونے کا رنگ",
      "دنیا کا سب سے بڑا",
      "قدیم تہذیب کا مرکز",
      "مصر میں واقع",
      "فرعون کی مٹی",
    ],
    answer: "پرامید",
  },
  // 8
  {
    hints: [
      "سب سے بڑی مسجد",
      "اسلام آباد میں",
      "منفرد ڈیزائن",
      "پہاڑوں کے بیچ",
      "چار مینار",
    ],
    answer: "فیصل مسجد",
  },
  // 9
  {
    hints: [
      "ایٹمی سائنسدان",
      "پاکستان کے ایٹمی پروگرام کے بانی",
      "محسنِ پاکستان",
      "1936 میں پیدا",
      "2021 میں وفات",
    ],
    answer: "عبدالقدیر خان",
  },
  // 10
  {
    hints: [
      "پہاڑی جھیل",
      "محبت کی کہانی",
      "ناران کے قریب",
      "ٹھنڈا پانی",
      "گلیشیئر کے بیچ",
    ],
    answer: "جھیل سیف الملوک",
  },
  // 11
  {
    hints: ["سیارہ", "سرخ مٹی", "پتلی فضا", "دو چاند", "خلائی گاڑیاں"],
    answer: "مریخ",
  },
  // 12
  {
    hints: [
      "فلاحی کارکن",
      "ایدھی فاؤنڈیشن کے بانی",
      "ایمبولینس سروس",
      "1928 میں پیدا",
      "2016 میں وفات",
    ],
    answer: "عبد الستار ایدھی",
  },

  // 13
  {
    hints: [
      "قدیم محل",
      "میوزیم اب",
      "گلابی پتھر",
      "کراچی میں",
      "کلفٹن کے قریب",
    ],
    answer: "موہٹہ پیلس",
  },
  // 14
  {
    hints: [
      "یوم آزادی پر ملی نغمہ",
      "سرکاری تقریب میں گایا جاتا ہے",
      "قوم کا حوصلہ بڑھاتا ہے",
      "پاکستان کے بارے میں",
      "فارسی زبان میں",
    ],
    answer: "قومی ترانہ",
  },
  // 15
  {
    hints: [
      "ملکہ ترنم",
      "گلوکارہ و اداکارہ",
      "3000 سے زائد گانے",
      "1926 میں پیدا",
      "2000 میں وفات",
    ],
    answer: "نورجہاں",
  },
  // 16
  {
    hints: [
      "شاعر مشرق",
      "سیالکوٹ میں پیدا",
      "تصورِ پاکستان",
      "فارسی اور اردو شاعر",
      "مزار لاہور",
    ],
    answer: "علامہ اقبال",
  },
  // 17
  {
    hints: [
      "لاہور میں واقع",
      "مغل دور کی عظیم مسجد",
      "سنہ 1673 میں تعمیر",
      "پاکستان کی دوسری بڑی مسجد",
      "سرخ پتھر سے بنی ہوئی",
    ],
    answer: "بادشاہی مسجد",
  },
  // 18
  {
    hints: [
      "جانور",
      "پاکستان کی علامت",
      "پہاڑوں میں پایا جاتا ہے",
      "سینگوں والا خوبصورت جانور",
      "قدرتی حسن کا نمائندہ",
    ],
    answer: "مارخور",
  },
  // 19
  {
    hints: [
      "سندھ میں واقع",
      "پاکستان کی دوسری بڑی جھیل",
      "قدیم سیاحتی مقام",
      "مچھلیوں کی بہتات",
      "پانی کا ذخیرہ",
    ],
    answer: "کینجھر جھیل",
  },
  // 20
  {
    hints: [
      "پاکستان کا سب سے زیادہ آبادی والا صوبہ",
      "لاہور اس کا دارالحکومت",
      "ماضی میں پانچ دریاؤں کا خطہ",
      "زراعت میں اہم مقام",
      "ثقافتی اور تاریخی ورثہ مالا مال",
    ],
    answer: "پنجاب",
  },
  // 21
  {
    hints: [
      "پنجاب کا تاریخی شہر",
      "صلح و آشتی کا شہر",
      "حضرت بلال حبشی اور درگاہیں یہاں موجود",
      "آم کے باغات کے لیے مشہور",
      "’شہرِ درگاہ‘ کے نام سے معروف",
    ],
    answer: "ملتان",
  },
  // 22
  {
    hints: [
      "سندھ میں واقع قدیم شہر",
      "وادی سندھ کی تہذیب کا حصہ",
      "3000 قبل مسیح سے بھی پرانا",
      "قدیم شہری منصوبہ بندی کی مثال",
      "مردون کا ٹیلہ",
    ],
    answer: "موہنجو داڑو",
  },
  //23
  {
    hints: [
      "انسان کا بہترین دوست",
      "بھونکتا ہے",
      "دم ہلاتا ہے",
      "وفادار",
      "چار ٹانگیں",
    ],
    answer: "کتا",
  },
];

let currentQuestionIndex = 0;
let revealedCount = 0;

const gameBoard = document.getElementById("game-board");
const controls = document.getElementById("controls");
const resetBtn = document.getElementById("resetBtn");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(index) {
  gameBoard.innerHTML = "";
  revealedCount = 0;
  controls.style.display = "none";

  const q = questions[index];

  // Create 5 hint boxes
  q.hints.forEach((hint, i) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = i + 1;
    box.setAttribute("data-text", hint);
    box.addEventListener("click", revealBox);
    gameBoard.appendChild(box);
  });

  // Create answer box
  const answerBox = document.createElement("div");
  answerBox.className = "box answer";
  answerBox.textContent = "Answer";
  answerBox.setAttribute("data-text", q.answer);
  answerBox.addEventListener("click", revealBox);
  gameBoard.appendChild(answerBox);
}

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

resetBtn.addEventListener("click", () => {
  loadQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    alert("You have completed all questions!");
  }
});

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

// Load first question
loadQuestion(currentQuestionIndex);
