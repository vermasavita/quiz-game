let angleInputs = document.querySelectorAll(".angle-input")
let submitBtn = document.querySelector("#submit-btn");
let output = document.querySelector("#output");


const calculateSumOfAngles = (angle1, angle2, angle3) => {
    let sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
};

const isTriangle = () => {
    if (Number(angleInputs[0].value) && Number(angleInputs[1].value) && Number(angleInputs[2].value)) {
        if (Number(angleInputs[0].value) > 0 && Number(angleInputs[1].value) > 0 && Number(angleInputs[2].value) >0) {
            let sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
            if (sumOfAngles === 180) {
                output.innerText = "You are right! The angle does form a triangle"
            } else {
                output.innerText = "Oh ho! you are wrong! The angle doesn't form a triangle"
            }
        } else {
            output.innerText = "Enter valid number"
        } 
    }else{
        output.innerText = "Enter valid number"
    }


};

submitBtn.addEventListener('click', isTriangle)
