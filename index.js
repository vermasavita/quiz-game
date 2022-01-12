let quizForm = document.querySelector(".quiz-form");
let submitBtn = document.querySelector("#submit-btn");
let output = document.querySelector("#output");

let correctAnswer = ["90°", "right angled","15cm","180°","110°"];

const calculateScore = () => {
    let score = 0;
    let index = 0;
    let formResult = new FormData(quizForm);
    for(let value of formResult.values()) {
        if(value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;

}

submitBtn.addEventListener('click', calculateScore);