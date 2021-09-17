var input = document.querySelectorAll(".input");
var checkArea = document.querySelector("#check-area");
var output = document.querySelector("#output");



function calculateArea() {
    var iptOne = Number(input[0].value);
    var iptTwo = Number(input[1].value);
    if(iptOne >0 && iptTwo >0){
    var baseAndHeightProduct = iptOne * iptTwo;
    areaOfTriangle = (baseAndHeightProduct) / 2;
    output.innerText = `The area of the triangle is ${areaOfTriangle} cm²`;}
    else{
        output.innerText = "Enter positive number"
    }
}

checkArea.addEventListener("click", calculateArea)