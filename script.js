var timeEl = document.querySelector('#timer')
var textAreaEl = document.querySelector('#question');
var startButton = document.querySelector('#button')
console.log(startButton)
function sendMessage() {
    timeEl.textContent = "The quiz is over!";
}
function countdown() {
    console.log('Start the Quiz')
    var secondsLeft = 2;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until the end of the quiz.";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage();
        }
    
      }, 1000);
}
function questions() {
    console.log('question 1')
    textAreaEl.textContent = "Question 1"
}
// use 19 for event listener click inside div for questions

startButton.addEventListener("click", countdown)
startButton.addEventListener("click", questions)