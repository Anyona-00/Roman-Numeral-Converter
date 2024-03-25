const numberInput = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")
const outputDiv = document.getElementById("output")


convertButton.addEventListener("click", checkUserInput)

const checkUserInput = () => {
    if(numberInput.value < 0  ){
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
    }else if( numberInput.value === ""){
        outputDiv.innerText = "Please enter a valid number" ;
    }else if (numberInput.value >= 4000){
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
    }}

    


console.log(checkUserInput())