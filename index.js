let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon= document.getElementById("copy-icon");


//show kar raha hai slider ki value
sliderValue.textContent=inputSlider.value;
// badal raha h slider movement ke hisab se
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});
genBtn.addEventListener('click',()=>{
    passBox.value = generatePassward();
});
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassward(){
    let genPassward = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerchars :"";
    allChars += uppercase.checked ? upperchars :"";
    allChars += numbers.checked ? allNumbers :"";
    allChars += symbols.checked ? allSymbols :"";

if(allChars =="" || allChars.length == 0){
    return genPassward;
}


    let i = 1;
    while(i <=inputSlider.value){

    
    genPassward += allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return genPassward;
}
copyIcon.addEventListener('click',() =>{
    navigator.Clipboard.writeText(passBox.value);
    copyIcon.title = "passward Copied";
});