var angleInputs = document.querySelectorAll(".angle-input")
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

submitBtn.addEventListener('click', isTriangle)

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
};

function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    if(sumOfAngles===180){
        output.innerText="You are right!"
    }else{
        output.innerText="Oh ho! you are wrong!"
    }
};