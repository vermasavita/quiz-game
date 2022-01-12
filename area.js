let input = document.querySelectorAll(".input");
let checkArea = document.querySelector("#check-area");
let output = document.querySelector("#output");

const calculateArea = () => {
    let iptOne = Number(input[0].value);
    let iptTwo = Number(input[1].value);
    if(iptOne >0 && iptTwo >0){
    let baseAndHeightProduct = iptOne * iptTwo;
    areaOfTriangle = (baseAndHeightProduct) / 2;
    output.innerText = `The area of the triangle is ${areaOfTriangle} cm²`;}
    else{
        output.innerText = "Enter positive number"
    }
}

checkArea.addEventListener("click", calculateArea)