let lengthInput = document.querySelectorAll(".length-input");
let hypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
let output = document.querySelector("#output");


const calculateHypotenuse = () => {
    let lengthIpt1 = Number(lengthInput[0].value);
    let lengthIpt2 = Number(lengthInput[1].value);
    if (lengthIpt2 > 0 && lengthIpt1 > 0) {
        let sumOfSquare = calculateSumOfSquare(lengthIpt1, lengthIpt2);
        let lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        output.innerText = " Length of Hypotenuse is  " + lengthOfHypotenuse;
    } else {
        output.innerText = "Enter positive number";
    }


}

const calculateSumOfSquare = (a, b) => {
    let sumOfSquare = a * a + b * b;
    return sumOfSquare

}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);
