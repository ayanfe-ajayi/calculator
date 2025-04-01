const offButton = document.getElementById ('off-btn');
const percentButton = document.getElementById ("percent-btn"); 
const sqrtButton = document.getElementById ("sqrt-btn");
const onOrAcButton = document.getElementById ("on-or-ac-btn");
const mrcButton = document.getElementById ("mrc-btn");
const mMinusButton = document.getElementById ("memory-minus-btn");
const mPlusButton = document.getElementById ("memory-plus-btn"); 
const clearEntryButton = document.getElementById ("clear-entry-btn");
const sevenButton = document.getElementById ("seven-btn");
const eightButton = document.getElementById ("eight-btn");
const nineButton = document.getElementById ("nine-btn");
const divideButton = document.getElementById ("divide-btn");
const fourButton = document.getElementById ("four-btn");
const fiveButton = document.getElementById ("five-btn");
const sixButton = document.getElementById ("six-btn");
const multiplyButton = document.getElementById ("multiply-btn");
const oneButton = document.getElementById ("one-btn");
const twoButton = document.getElementById ("two-btn");
const threeButton = document.getElementById ("three-btn");
const subtractButton = document.getElementById ("subtract-btn");
const zeroButton = document.getElementById ("zero-btn");
const pointButton = document.getElementById ("point-btn");
const equalsButton = document.getElementById ("equals-btn");
const addButton = document.getElementById ("add-btn");
const entryDisplay = document.getElementById("entry-display");
const resultDisplay = document.getElementById("result-display");


function offCalculator() {
    entryDisplay.style.display = "none";
    resultDisplay.style.display = "none";
} 

function onCalculator() {
    entryDisplay.style.display = "none";
    resultDisplay.style.display = "block";
    resultDisplay.innerText = "0";
}

offButton.addEventListener ("click", offCalculator);
onOrAcButton.addEventListener("click", onCalculator);

sevenButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    if (resultDisplay.innerText === "0" || hasRun) {
        resultDisplay.innerText = "7";
        entryDisplay.style.display = "none";

    }
    else resultDisplay.innerText += "7";
    hasRun = false;
});
eightButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    if (resultDisplay.innerText === "0" || hasRun) {
        resultDisplay.innerText = "8";
    }
    else resultDisplay.innerText += "8";
    hasRun = false;
});
nineButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun
    )? 
    resultDisplay.innerText = "9" :
    resultDisplay.innerText += "9";
    hasRun = false;
});
fourButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "4" :
    resultDisplay.innerText += "4";
    hasRun = false;
});
fiveButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "5" :
    resultDisplay.innerText += "5";
    hasRun = false;
});
sixButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "6" :
    resultDisplay.innerText += "6";
    hasRun = false;
});
oneButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "1" :
    resultDisplay.innerText += "1";
    hasRun = false;
});
twoButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "2" :
    resultDisplay.innerText += "2";
    hasRun = false;
});
threeButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "3" :
    resultDisplay.innerText += "3";
    hasRun = false;
});
zeroButton.addEventListener ("click", function(){
    signPresent = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || hasRun)? 
    resultDisplay.innerText = "0" :
    resultDisplay.innerText += "0";
    hasRun = false;
});


divideButton.addEventListener ("click", function(){
    if(signPresent === false){
    hasRun = false;
    entryDisplay.style.display = "none";
    resultDisplay.innerText += "÷";
    signPresent = true;
}
else {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
    resultDisplay.innerText += "÷";
}
});
multiplyButton.addEventListener ("click", function(){
    if(signPresent === false){
    hasRun = false;
    entryDisplay.style.display = "none";
    resultDisplay.innerText += "x";
    signPresent = true;
}
else if (resultDisplay.innerText.slice(-1) === "÷"){ 
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
    resultDisplay.innerText += "x";
}
});
subtractButton.addEventListener ("click", function(){
    if(signPresent === false){
    hasRun = false;
    entryDisplay.style.display = "none";
    (resultDisplay.innerText === "0" || resultDisplay.innerText === "-")?
    resultDisplay.innerText = "-" :
    resultDisplay.innerText += "-";
    signPresent = true;
}
    else if (resultDisplay.innerText.slice(-1) === "+"){ 
        resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
        resultDisplay.innerText += "-";
}
});
addButton.addEventListener ("click", function(){
    hasRun = false;
    entryDisplay.style.display = "none";
    resultDisplay.innerText += "+";
});

percentButton.addEventListener ("click", function(){
    hasRun = false;
    entryDisplay.style.display = "none";
    resultDisplay.innerText += "%";
});

pointButton.addEventListener ("click", function(){
    resultDisplay.innerText += ".";
});
clearEntryButton.addEventListener("click", function(){
    (resultDisplay.innerText.length == 1)? 
    resultDisplay.innerText ="0" : 
    resultDisplay.innerText =  resultDisplay.innerText.slice(0, -1);
});
equalsButton.addEventListener ("click", calculate);
let hasRun = false;
let signPresent = false;

function calculate () {
    resultDisplay.innerText += "*1";
    let expression = resultDisplay.innerText;
    let result = eval(resultDisplay.innerText.replace(/x|\÷|%/g,  match => {
         return match === 'x' ? '*' : match === '÷' ? '/' : '/100'}));
    resultDisplay.innerText = result;
    entryDisplay.style.display = "block";
    entryDisplay.innerText = expression.slice(0, -2);
    hasRun = true;
}

