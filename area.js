var input = document.querySelectorAll(".input");
var checkArea = document.querySelector("#check-area");
var output = document.querySelector("#output");



function calculateArea() {
    var baseAndHeightProduct = input[0].value * input[1].value;
    areaOfTriangle = (baseAndHeightProduct) / 2;
    output.innerText = `The area of the triangle is ${areaOfTriangle} cm²`;
}

checkArea.addEventListener("click", calculateArea)