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

let qnArray = 0
var start = document.querySelector("#start-btn")
var timeLeft = document.querySelector("#timer")
var seconds = 75
var container = document.querySelector("#questions-container")
var rightWrong = document.querySelector("#check-answer")
var li = document.createElement("button")
var li2 = document.createElement("button")
var li3 = document.createElement("button")
var li4 = document.createElement("button")
var viewScores = document.querySelector("#leaderboard")
var scoreList = document.querySelector("#highscores")
var scoreContainer = document.querySelector("#score-container")
var h1 = document.createElement("h1")
var storeScores = [];
var storeScoresIndex = 0


start.addEventListener("click", function() {
    if(seconds === 75) {
        setInterval(function() {
            seconds--;
            timeLeft.textContent = "Time left:" + seconds;
            
            if(seconds <= 0) {
                clearInterval(timeLeft);
                timeLeft.textContent = "Out of time!";
                container.innerHTML = ""
                container.appendChild(h1)
                h1.textContent = "GAME OVER!"
            }
        }, 1000);
    };
    startQuiz()
});

function startQuiz() {
    for (var i=0; i<qn.length; i++ ) {
        var quest = qn[qnArray].question
        var choices = qn[qnArray].answers
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
        seconds = seconds + 10;
        rightWrong.textContent = "Correct!"
    }
    else {
        seconds = seconds - 10;
        rightWrong.textContent = "Wrong!"     
    }

    qnArray++;

    if(qnArray >=qn.length) {
        endQuiz()
    }
    else {
        startQuiz()
        rightWrong.textContent = ""
    }

};

function endQuiz() {
    container.innerHTML = "";
    var p = document.createElement("p");
    var label = document.createElement("label");
    var input = document.createElement("input");
    var submitBtn = document.createElement("button");

    h1.setAttribute("id", "endh1");
    p.setAttribute("id", "endp");
    label.setAttribute("id", "initials-text");
    input.setAttribute("id", "initials");
    submitBtn.setAttribute("id","submit-btn");

    container.append(h1,p,label,input,submitBtn);

    h1.textContent = "Finished!";
    p.textContent = "Your final score is:" + seconds;
    label.textContent = "Your initials:";
    input.textContent = "";
    submitBtn.textContent = "Submit your score!";

    var name = document.querySelector("#initials")
    submitBtn.addEventListener("click", function(event){
        event.preventdefault

        var submitedScore = {
        initials: name.value,
        score: seconds.value
        };
        
        console.log(submitedScore)
        localStorage.setItem("submitedScore", JSON.stringify(submitedScore));
        storeScores.push(submitedScore);
        localStorage.setItem("storeScores", JSON.stringify(storeScores));
    });
}

viewScores.addEventListener("click", function(){
    console.log("clicked")
    container.innerHTML = ""
    scoreContainer.prepend(h1)
    h1.textContent = "Leaderboard"
    var listItem = document.createElement("li")
    storeScores = localStorage.getItem("storeScores")
    for(var i = 0;i < storeScores.length; i++) {
        scoreList.appendChild(listItem);
        listItem.setAttribute("class", "score")
        listItem.textContent = storeScores[storeScoresIndex];
    }
    storeScores = JSON.parse(storeScores);
    storeScoresIndex++
});