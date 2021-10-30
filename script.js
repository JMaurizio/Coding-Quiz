var qn = [
    {
    question: "Commonly used data types do not include.",
    answers:["strings","booleans","alerts","numbers"],
    correct:"alerts"
    },
    {
    question: "The condition of an if/else statement is enclosed within _______.",
    answers:["quotes","curly brackets","parenthesis","square brackets"],
    correct:"parenthesis"
    },
    {
    question: "Arrays in Javascript can be used to store _______.",
    answers:["numbers and strings","other arrays","booleans","all of the above"],
    correct:"all of the above"
    },
    {
    question: "String values must be enclosed within ________ whe being assigned to variables.",
    answers:["commas","curly brackets", "quotes","parenthesis"],
    correct:"quotes"
    },
    {
    question: "A useful tool used during development for printing content to the debugger is.",
    answers:["Javascript","terminal/bash","for loops","console.log"],
    correct:"console.log"
    }
];

var qnArray = 0
var start = document.querySelector("#start-btn")
var timeLeft = document.querySelector("#timer")
var seconds = 75
var container = document.querySelector("#questions-container")
var options = document.querySelector("#options")
var rightWrong = document.querySelector("#check-answer")
var quest = qn[qnArray].question
var choices = qn[qnArray].answers
var li = document.createElement("button")
var li2 = document.createElement("button")
var li3 = document.createElement("button")
var li4 = document.createElement("button")

start.addEventListener("click", function() {
    if(seconds === 75) {
        setInterval(function() {
            seconds--;
            timeLeft.textContent = "Time left:" + seconds;
            
            if(seconds <= 0) {
                clearInterval(timeLeft);
                timeLeft.textContent = "Out of time!";
            }
        }, 1000);
    };
    startQuiz()
});

function startQuiz() {
    container.innerHTML = "";
    for (var i=0; i<qn.length; i++) {
        container.textContent = quest
        container.append(li,li2,li3,li4)
        li.textContent = choices[0]
        li2.textContent = choices[1]
        li3.textContent = choices[2]
        li4.textContent = choices[3]
        li.setAttribute("class", "listitem")
        li2.setAttribute("class", "listitem")
        li3.setAttribute("class", "listitem")
        li4.setAttribute("class", "listitem")
        li.onclick = checkAnswer
        li2.onclick = checkAnswer
        li3.onclick = checkAnswer
        li4.onclick = checkAnswer
    }
    
};

function checkAnswer(event) {
    var element = event.target;
    var right = qn[qnArray].correct
    if(element.textContent == right ) {
        rightWrong.textContent = "Correct!"
    }
    else {
        seconds = seconds - 10;
        rightWrong.textContent = "Wrong!"
        startQuiz()        
    }

};

