// quiz.js

const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "London", "Rome", "Berlin"], correct: 0 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the largest planet in our solar system?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    { question: "Who wrote 'To Kill a Mockingbird'?", answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"], correct: 0 },
    { question: "What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
    { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "What is the chemical symbol for water?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
    { question: "What is the longest river in the world?", answers: ["Nile", "Amazon", "Yangtze", "Mississippi"], correct: 1 },
    { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correct: 2 },
    { question: "Which element has the chemical symbol 'O'?", answers: ["Osmium", "Oxygen", "Gold", "Silver"], correct: 1 },
    { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: 1 },
    { question: "Which is the largest ocean on Earth?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
    { question: "What is the speed of light?", answers: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "200,000 km/s"], correct: 0 },
    { question: "What is the boiling point of water?", answers: ["50°C", "100°C", "150°C", "200°C"], correct: 1 },
    { question: "Which country is known as the Land of the Rising Sun?", answers: ["China", "Japan", "Thailand", "South Korea"], correct: 1 },
    { question: "How many continents are there on Earth?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "What is the largest mammal in the world?", answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1 },
    { question: "Who developed the theory of relativity?", answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"], correct: 2 },
    { question: "What gas do plants use for photosynthesis?", answers: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], correct: 2 },
    { question: "What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
    { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Pepper", "Avocado", "Onion"], correct: 2 },
    { question: "What element is represented by the symbol 'Na'?", answers: ["Nitrogen", "Neon", "Sodium", "Nickel"], correct: 2 },
    { question: "Which planet is known as the Morning Star or Evening Star?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 0 },
    { question: "What is the currency of Japan?", answers: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalTime = 600; // Total time for the quiz in seconds (10 minutes)

function startTimer() {
    let timeRemaining = totalTime;
    const timerDisplay = document.getElementById('time');
    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeRemaining--;
        if (timeRemaining < 0) {
            clearInterval(timer);
            showResult(); // Show result when time is up
        }
    }, 1000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    showModal();
}

function showModal() {
    document.getElementById('modal-score').innerText = score;
    document.getElementById('score-modal').style.display = 'block';
    // Trigger burst animation
    const burst = document.querySelector('.burst');
    burst.classList.add('burst-animation');
}

function closeModal() {
    document.getElementById('score-modal').style.display = 'none';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('score-modal').style.display = 'none';
    showQuestion();
    startTimer();
}

// Initialize the quiz
startTimer();
showQuestion();
