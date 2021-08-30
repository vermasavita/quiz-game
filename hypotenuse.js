var lengthInput = document.querySelectorAll(".length-input");
var hypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
var output = document.querySelector("#output");

hypotenuseBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    var sumOfSquare = calculateSumOfSquare(Number(lengthInput[0].value), Number(lengthInput[1].value));
    var lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = " Length of Hypotenuse is  " + lengthOfHypotenuse;


}

function calculateSumOfSquare(a, b) {
    var sumOfSquare = a * a + b * b;
    return sumOfSquare

}