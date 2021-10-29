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

var start = document.querySelector("#start-btn")
var timeLeft = document.querySelector("#timer")
var seconds = 75
var container = document.querySelector("#questions-container")
var options = document.querySelector("#options")
var li = document.createElement("li")

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
    for (var i=0; i<qn.length; i++) {
        var quest = qn[i].question
        var choices = qn[i].answers
        var li = document.createElement("li")
        container.textContent = quest
        options.append(li)
        li.textContent = choices
    }
};

function checkAnswer() {

};