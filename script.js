const questions = [
    {
        question: "Which language is used to style web pages?",
        answers: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Machine Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to make a webpage interactive?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "##", "<!-- -->", "**"],
        correct: 0
    },
    {
        question: "Which of these is a programming language?",
        answers: ["HTML", "CSS", "Python", "HTTP"],
        correct: 2
    },
    {
        question: "What does CPU stand for?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        correct: 0
    },
    {
        question: "Which device is used to display output?",
        answers: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        correct: 2
    },
    {
        question: "Which one is an operating system?",
        answers: ["Windows", "Google", "HTML", "Python"],
        correct: 0
    },
    {
        question: "What is the full form of RAM?",
        answers: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Action Machine",
            "Run Access Module"
        ],
        correct: 0
    },
    {
        question: "Which language is mainly used for web scripting?",
        answers: ["JavaScript", "C", "Assembly", "SQL"],
        correct: 0
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.style.display = "none";
    resultElement.style.display = "none";
    quizElement.style.display = "block";
    showQuestion();
}

function showQuestion() {
    resetAnswers();

    const current = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}. ${current.question}`;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer");

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerButtons.appendChild(button);
    });
}

function resetAnswers() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestion].correct;
    const buttons = answerButtons.children;

    for (let button of buttons) {
        button.disabled = true;
    }

    if (index === correctAnswer) {
        score++;
    }

    buttons[correctAnswer].style.background = "#c8f7c5";

    if (index !== correctAnswer) {
        buttons[index].style.background = "#ffcaca";
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.style.display = "none";
    resultElement.style.display = "block";

    scoreElement.textContent =
        `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
