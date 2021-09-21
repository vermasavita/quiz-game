var angleInputs = document.querySelectorAll(".angle-input")
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

submitBtn.addEventListener('click', isTriangle)

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
};

function isTriangle() {
    if (Number(angleInputs[0].value) && Number(angleInputs[1].value) && Number(angleInputs[2].value)) {
        if (Number(angleInputs[0].value) > 0 && Number(angleInputs[1].value) > 0 && Number(angleInputs[2].value) >0) {
            var sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
            if (sumOfAngles === 180) {
                output.innerText = "You are right! The angle does form a triangle"
            } else {
                output.innerText = "Oh ho! you are wrong! The angle doesn't form a triangle"
            }
        } else {
            output.innerText = "Enter valid number"
        } 
    }else{
        output.innerText = "Empty field"
    }


};