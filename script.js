var timeEl = document.querySelector('#timer')
var textAreaEl = document.querySelector('#question');
var startButton = document.querySelector('#button')
var correctButton = document.querySelector('#answer')
var wrongButton = document.querySelector('#answer')

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
          // Stops execution of timer at 0
          clearInterval(timerInterval);
          // Calls function to append timer text
          sendMessage();
        }
    
      }, 1000);
}
function questions() {
    console.log('question 1')
    // textAreaEl.textContent = "Question 1: What does js stand for?"
    
}

textAreaEl.addEventListener("click", function(event) {
    var element = event.target;
  
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");

        if (state === "correct")
        console.log('right')

        else if(state === "wrong")
        console.log('wrong')
}})
// wrongButton.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Check if the clicked element was a wrong answer
//     if (element.matches ('button')) {
//         var state = element.getAttribute("data-state");

//         if (state === "wrong")
//         console.log('wrong')
//     }})
startButton.addEventListener("click", countdown)
startButton.addEventListener("click", questions)