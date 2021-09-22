var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

var correctAnswer = ["90°", "right angled","15cm","180°","110°"];

function calculateScore() {
    var score = 0;
    var index = 0;
    var formResult = new FormData(quizForm);
    for(let value of formResult.values()) {
        if(value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;

}

submitBtn.addEventListener('click', calculateScore);