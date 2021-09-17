var lengthInput = document.querySelectorAll(".length-input");
var hypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
var output = document.querySelector("#output");

hypotenuseBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    var lengthIpt1 = Number(lengthInput[0].value);
    var lengthIpt2 = Number(lengthInput[1].value);
    if (lengthIpt2 > 0 && lengthIpt1 > 0) {
        var sumOfSquare = calculateSumOfSquare(lengthIpt1, lengthIpt2);
        var lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        output.innerText = " Length of Hypotenuse is  " + lengthOfHypotenuse;
    } else {
        output.innerText = "Enter positive number";
    }


}

function calculateSumOfSquare(a, b) {
    var sumOfSquare = a * a + b * b;
    return sumOfSquare

}