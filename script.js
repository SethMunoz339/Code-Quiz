var timeEl = document.querySelector('#timer');
var textAreaEl = document.querySelector('#questioncontainer');
var startButton = document.querySelector('#button');
var endButton = document.querySelector('#endbotton')
var correctButton = document.querySelector('#answer');
var wrongButton = document.querySelector('#answer');
var arrQuestions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]
function hide() {
    document.getElementById("questioncontainer").style.visibility = "hidden";
}
hide()
console.log(startButton)

function sendMessage() {
    timeEl.textContent = "The quiz is over!";
}
startButton.addEventListener("click", countdown)
startButton.addEventListener("click", question1)
// endButton.addEventListener("click", endTimer)
function countdown() {
    console.log('Start the Quiz!')
    var secondsLeft = 15;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds until the quiz is over.";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage();
        }
       
              }, 1000);
}
function endTimer(secondsLeft, timerInterval){
    var secondsLeft = 0
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds until the quiz is over.";
    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }})}



// 1111111111111111111111111111111111111111111111111111111111111111
function question1() {
    document.getElementById("questioncontainer").style.visibility = "visible";
    console.log (arrQuestions[0])
    textAreaEl.addEventListener("click", function(event) {
            var element = event.target;

 let numCorrect = i = 0
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");

        if (state === "correct"){
        numCorrect=[i=i+1];
        console.log('correct')    
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "flex";
        }
        else if(state === "wrong"){
            numCorrect={i}
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "flex";
        console.log('wrong')}

console.log (numCorrect)
question2()
return numCorrect
}})}
// 2222222222222222222222222222222222222222222222222222222222222222
function question2() {
    // document.getElementById("questioncontainer").style.visibility = "visible";
    console.log(arrQuestions[1])
    textAreaEl.addEventListener("click", function(event) {
            var element = event.target;

 let numCorrect = i 
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");

        if (state === "correct"){
        numCorrect=[i=i+1];
        console.log('correct')    
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "flex";
        }
        else if(state === "wrong"){
            numCorrect={i}
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "flex";
        console.log('wrong')}

console.log (numCorrect)
question3()
return numCorrect
}})}
// 3333333333333333333333333333333333333333333333333333333333333333333
function question3() {
    console.log (arrQuestions[2])


    textAreaEl.addEventListener("click", function(event) {
            var element = event.target;

 let numCorrect = i 
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");

        if (state === "correct"){
        numCorrect=[i=i+1];
        console.log('correct')    
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "flex";
        }
        else if(state === "wrong"){
            numCorrect={i}
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "flex";
        console.log('wrong')}

console.log (numCorrect)
question4()
return numCorrect
}})}
// 4444444444444444444444444444444444444444444444444444444
function question4() {
    console.log (arrQuestions[3])


    textAreaEl.addEventListener("click", function(event) {
            var element = event.target;

 let numCorrect = i 
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");

        if (state === "correct"){
        numCorrect=[i=i+1];
        console.log('correct')    
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "flex";
        }
        else if(state === "wrong"){
            numCorrect={i}
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "flex";
        console.log('wrong')}

console.log (numCorrect)
question5()
return numCorrect
}})}
// 5555555555555555555555555555555555555555555555555555555555555555
function question5() {
    console.log (arrQuestions[4])


    textAreaEl.addEventListener("click", function(event) {
            var element = event.target;

 let numCorrect = i 
    // Check if the clicked element was a correct answer
    if (element.matches ('button')) {
        var state = element.getAttribute("data-state");
        if (state === "correct"){
            numCorrect=[i=i+1];
            console.log('correct')    
            document.getElementById("question5").style.display = "none";
            secondsLeft = 0
            sendMessage()
        }
        else if(state === "wrong"){
            numCorrect={i}
            document.getElementById("question5").style.display = "none";
            endTimer()
        console.log('wrong')
        }

console.log (numCorrect)

return numCorrect
}})}

// endButton.addEventListener("click", function(event) {
//     var element = event.target; 