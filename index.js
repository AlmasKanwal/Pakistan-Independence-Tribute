// Quiz Section Start
const questions = [
  {
    question: "What was Allama Iqbal’s profession?",
    options: ["Politician", "Poet and Philosopher", "Journalist", "Teacher"],
    correct: 1
  },
  {
    question: "Who was Pakistan’s first president?",
    options: ["Ayub Khan", "Iskander Mirza", "Zia-ul-Haq", "Yahya Khan"],
    correct: 1
  },
  {
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Sir Syed Ahmed Khan"],
    correct: 2
  },
  {
    question: "Which year did Pakistan become a nuclear power?",
    options: ["1998", "1974", "2001", "1990"],
    correct: 0
  },
  {
    question: "When did Pakistan gain independence?",
    options: ["August 14, 1947", "August 15, 1947", "July 14, 1947", "September 14, 1947"],
    correct: 0
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Ayub Khan", "Zulfikar Ali Bhutto"],
    correct: 1
  },
  {
    question: "In which city was the Pakistan Resolution passed?",
    options: ["Karachi", "Dhaka", "Lahore", "Islamabad"],
    correct: 2
  },
  {
    question: "When was the first constitution of Pakistan adopted?",
    options: ["1956", "1947", "1962", "1973"],
    correct: 0
  },
  {
    question: "Where did the first capital of Pakistan reside?",
    options: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
    correct: 1
  },
  {
    question: "Who gave the idea of a separate Muslim state in 1930?",
    options: ["Sir Syed Ahmed Khan", "Allama Iqbal", "Jinnah", "Nawab of Dhaka"],
    correct: 1
  },
  {
    question: "Where did Muhammad Ali Jinnah deliver his famous 11 August speech?",
    options: ["Lahore", "Islamabad", "Karachi", "Quetta"],
    correct: 2
  },
  {
    question: "Who led the Simla Delegation in 1906?",
    options: ["Allama Iqbal", "Sir Syed Ahmed Khan", "Aga Khan III", "Jinnah"],
    correct: 2
  },
  {
    question: "What does 'Pakistan' mean?",
    options: ["Land of the Pure", "Land of Muslims", "Peaceful Land", "Green Land"],
    correct: 0
  },
  {
    question: "Who designed the flag of Pakistan?",
    options: ["Allama Iqbal", "Amiruddin Kidwai", "Liaquat Ali Khan", "Fatima Jinnah"],
    correct: 1
  },
  {
    question: "Who was the first Governor-General of Pakistan?",
    options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Khwaja Nazimuddin", "Ghulam Muhammad"],
    correct: 1
  },
  {
    question: "Which document legally created Pakistan?",
    options: ["Pakistan Resolution", "Indian Independence Act 1947", "Lahore Resolution", "Objective Resolution"],
    correct: 1
  },
  {
    question: "What was the name of Pakistan’s first political party?",
    options: ["Pakistan Muslim League", "All India Muslim League", "PPP", "PTI"],
    correct: 1
  },
  {
    question: "Who is known as Mohsin-e-Pakistan?",
    options: ["Allama Iqbal", "Abdul Sattar Edhi", "Dr. Abdul Qadeer Khan", "Nawaz Sharif"],
    correct: 2
  },
  {
    question: "When was the Pakistan Resolution passed?",
    options: ["March 23, 1940", "August 14, 1947", "March 23, 1930", "July 19, 1946"],
    correct: 0
  },
  {
    question: "What was the name of the movement launched in 1947 to support the partition?",
    options: ["Pakistan Movement", "Muslim League Movement", "Tehreek-e-Pakistan", "Freedom Movement"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = '';

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = `${currentQuestion + 1}. ${q.question}`;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(optionDiv, index === q.correct ? 'correct' : 'wrong');
        optionsContainer.appendChild(optionDiv);
    });
    document.getElementById('nextBtn').style.display = 'none';
}

function selectOption(element, result) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedAnswer = result;
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    if (selectedAnswer === 'correct') score++;
    currentQuestion++;
    selectedAnswer = '';
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('resultsBtn').style.display = 'block';
    }
}

function showResults() {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    const percentage = (score / questions.length) * 100;
    document.getElementById('scoreText').textContent = `Your Score: ${score}/${questions.length} (${percentage.toFixed(0)}%)`;
    let message = '';
    if (percentage >= 80) message = "Excellent! You have great knowledge about Pakistan's independence history! 🇵🇰";
    else if (percentage >= 60) message = "Good job! You know quite a bit about Pakistan's independence. Keep learning! 📚";
    else if (percentage >= 40) message = "Not bad at all! You’re getting there maybe try reading a bit more about Pakistan’s history. 🤔";
    else message = "You might want to brush up on Pakistan's independence history. Keep studying! 💪";
    document.getElementById('scoreMessage').textContent = message;

    // Show all correct answers
    let answerList = '<h4>Correct Answers:</h4><ul style="text-align: left">';
    questions.forEach((q, i) => {
        answerList += `<li><strong>${i + 1}.</strong> ${q.question} <br>✅ <em>${q.options[q.correct]}</em></li><br>`;
    });
    answerList += '</ul>';
    document.getElementById('allAnswers').innerHTML = answerList;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = '';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;
// Quiz Section End


// Generate Independance Day Card Start
function setName() {
            const name = document.getElementById("nameInput").value.trim();
            document.getElementById("recipientName").textContent = name || "Pakistan";
        }

        function downloadCard() {
            const card = document.getElementById("card");

            // window.scrollTo(0, 0);

            html2canvas(card, { scale: 3, useCORS: true }).then(canvas => {
                const link = document.createElement("a");
                link.download = "IndependenceDayCard.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        }
// Generate Independance Day Card End