// Define the quiz questions and answers
const questions = [
    {
      question: "What is Dungeons and Dragons?",
      choices: [
        "A fantasy role-playing game",
        "A board game",
        "A card game",
        "A rock band"
      ],
      answer: "A fantasy role-playing game"
    },
    {
      question: "What is the job of the Dungeon Master?",
      choices: [
        "To tell the story",
        "To role-play the monsters and non-player characters",
        "To create combat encounters and challenges for players",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is a class?",
      choices: [
        "A a group of adventurers",
        "A type of monster",
        "A character type which grants certain abilities",
        "A character type that indicates the personal history"
      ],
      answer: "A character type which grants certain abilities"
    },
    {
      question: "What is does AC stand for?",
      choices: [
        "Alternative Class",
        "Armor Class",
        "Armor Costitution",
        "Available Carry"
      ],
      answer: "Armor Class"
    },
    {
      question: "What is the difference between a sorcerer and a wizard?",
      choices: [
        "Sorcerers have more powerful spells but wizards know more spells.",
        "Wizards learn spells over time but sorcerers know all their spells automatically.",
        "Wizards use a spellbook but sorcerers use a spell focus item.",
        "There is no difference beyond the name."
      ],
      answer: "Wizards use a spellbook but sorcerers use a spell focus item."
    },
    {
      question: "What is the power that makes a druid different from the rest of the classes?",
      choices: [
        "Druids can add damage to attacks when they have advantage.",
        "Druids can turn into animals.",
        "Druids can talk to plants.",
        "Druids can heal people without using a spell."
      ],
      answer: "Druids can turn into animals."
    },
    {
      question: "What is the main function of a cleric?",
      choices: [
        "Clerics' main function is to heal party members.",
        "Clerics' main function is to make party members more powerful.",
        "Clerics' main function is to be front line attackers.",
        "Clerics' main function is to cast damaging spells."
      ],
      answer: "Clerics' main function is to heal party members."
    },
    {
      question: "What is the special ability that rogues posess?",
      choices: [
        "Rogues can lie, cheat, and steal.",
        "Rogues can play instruments.",
        "Rogues can cast damaging spells.",
        "Rogues can use a sneak attack to cause extra damage."
      ],
      answer: "Rogues can use a sneak attack to cause extra damage."
    },
    {
      question: "The two classes that are good at fighting and magic are...",
      choices: [
        "wizards and paladins.",
        "Warlocks and rangers.",
        "Rangers and paladins.",
        "None of the above."
      ],
      answer: "Rangers and paladins."
    },
    {
      question: "The most recently added class is...",
      choices: [
        "Warlocks.",
        "Rangers.",
        "Fighters.",
        "Artificers.",
        "Bards."
      ],
      answer: "Artificers."
    }
  ];

  // Define the quiz parameters
var quizTime = 45;  // Time in seconds
var decreaseTime = 2;  // Time decrease in seconds for incorrect answers

// Get the quiz HTML elements
var startButton = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var questionText = document.getElementById("question");
var choicesList = document.getElementById("choices");
var timerText = document.getElementById("time");
var correctText = document.getElementById("correct");
var totalText = document.getElementById("total");
// Define the beginning quiz variables
let currentQuestion = 0;
let score = 0;
let timeLeft = quizTime;

// Hide the quiz div at the start of the application loading or restart
quizDiv.style.display = "none";

startButton.addEventListener("click", startQuiz)

function startQuiz() {
  
  // Show the quiz div and start the timer when the Start button is clicked
      quizDiv.style.display = "flex";
    startButton.style.display = "none";
    console.log('start quiz')
    showQuestion();

    // Start the timer
    var timer = setInterval(function() {
      timeLeft--;
      timerText.textContent = timeLeft;

      // Check if the time has run out
      if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  };

// Define the quiz functions
function showQuestion() {
  // Clear the previous question and choices
  questionText.textContent = "";
  choicesList.innerHTML = "";

  // Set the current question text
  questionText.textContent = questions[currentQuestion].question;
console.log(questions[currentQuestion].question)
  // Add the current question choices
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    const choice = questions[currentQuestion].choices[i];
    const choiceItem = document.createElement("li");
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceItem.appendChild(choiceButton);
    choicesList.appendChild(choiceItem);

    // Add event listener to the choice button
    choiceButton.addEventListener("click", function() {
      // Check the user's answer and update the score and time left
      if (this.textContent === questions[currentQuestion].answer) {
        score++;
        correctText.textContent = score;
        console.log('correct')
        console.log(score)
      } else {
        console.log('incorrect')
        timeLeft = Math.max(0, timeLeft - decreaseTime);
      }

      // Move to the next question or end the quiz if all questions have been answered
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    });
  }
}

