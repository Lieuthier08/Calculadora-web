

const display = document.getElementById("display");
const onclick = document.getElementById("onclick");

function appendToDisplay(value){
     display.value += value;
}

function clearDisplay(){
     display.value = "";
     
}

function calculate(){
     try{
        display.value = eval(display.value);
     }
     catch(error){
        display.value = "ERROR"
     }
}