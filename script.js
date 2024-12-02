// Data pertanyaan dan jawaban
const questions = [
    {
        question: "Apa nama ibu kota negara Indonesia?",
        options: {
            A: "Surabaya",
            B: "Bandung",
            C: "Medan",
            D: "Jakarta"
        },
        correct: "D"
    },
    {
        question: "Sungai terpanjang di Indonesia adalah?",
        options: {
            A: "Sungai Musi",
            B: "Sungai Kapuas",
            C: "Sungai Mahakam",
            D: "Sungai Barito"
        },
        correct: "B"
    },
    {
        question: "Pulau terbesar di Indonesia adalah?",
        options: {
            A: "Pulau Sumatera",
            B: "Pulau Jawa",
            C: "Pulau Kalimantan",
            D: "Pulau Sulawesi"
        },
        correct: "C"
    },
    {
        question: "Siapakah proklamator kemerdekaan Indonesia?",
        options: {
            A: "Soekarno dan Moh. Hatta",
            B: "R.A. Kartini dan Dewi Sartika",
            C: "Jenderal Sudirman dan Bung Tomo",
            D: "Ki Hajar Dewantara dan Agus Salim"
        },
        correct: "A"
    },
    {
        question: "Gunung tertinggi di Indonesia adalah?",
        options: {
            A: "Gunung Semeru",
            B: "Gunung Merapi",
            C: "Gunung Rinjani",
            D: "Gunung Puncak Jaya"
        },
        correct: "D"
    },
    {
        question: "Hari Kemerdekaan Indonesia diperingati pada tanggal?",
        options: {
            A: "17 Juli",
            B: "17 Agustus",
            C: "17 September",
            D: "17 Oktober"
        },
        correct: "B"
    },
    {
        question: "Candi Borobudur terletak di provinsi?",
        options: {
            A: "Jawa Timur",
            B: "Jawa Barat",
            C: "Jawa Tengah",
            D: "Bali"
        },
        correct: "C"
    },
    {
        question: "Apa nama hewan khas Pulau Komodo?",
        options: {
            A: "Komodo",
            B: "Harimau",
            C: "Gajah",
            D: "Badak"
        },
        correct: "A"
    },
    {
        question: "Bendera negara Indonesia terdiri dari warna?",
        options: {
            A: "Merah dan Putih",
            B: "Merah dan Hijau",
            C: "Putih dan Biru",
            D: "Hitam dan Kuning"
        },
        correct: "A"
    },
    {
        question: "Lagu kebangsaan Indonesia adalah?",
        options: {
            A: "Indonesia Raya",
            B: "Tanah Airku",
            C: "Garuda Pancasila",
            D: "Satu Nusa Satu Bangsa"
        },
        correct: "A"
    }
];

let currentQuestion = 0;

// Tampilkan pertanyaan
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");
    const optionD = document.getElementById("optionD");

    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    optionA.textContent = `A. ${questionData.options.A}`;
    optionB.textContent = `B. ${questionData.options.B}`;
    optionC.textContent = `C. ${questionData.options.C}`;
    optionD.textContent = `D. ${questionData.options.D}`;
}

// Cek jawaban
function selectAnswer(answer) {
    const feedback = document.getElementById("feedback");
    if (answer === questions[currentQuestion].correct) {
        feedback.textContent = "Jawaban Anda benar!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Jawaban Anda salah.";
        feedback.style.color = "red";
    }
}

// Navigasi soal
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        document.getElementById("feedback").textContent = "";
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        document.getElementById("feedback").textContent = "";
    }
}

// Mulai game
showQuestion();
