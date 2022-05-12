var currentNumberwrapper = document.getElementById("currentNumber");
var currentNumber = 0; 

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;
    if(currentNumber<0){
        currentNumber.style.backgroundColor = "#FF0F0F"
    }
}

/*function negativar(currentNumber){
    if (currentNumber <0) {
        currentNumber.style.backgroundColor = "#FF0F0F"
    }
}*/