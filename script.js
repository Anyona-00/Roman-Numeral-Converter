const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

function convertToRoman() {
    let num = parseInt(numberInput.value); // Directly use the input value here.

    if (isNaN(num)) {
        outputDiv.innerText = "Please enter a valid number";
        return;
    } else if (num < 1) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (num >= 4000) {
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    let roman = '';
    for (let i = 0; i < romanMatrix.length; i++) {
        while (num >= romanMatrix[i][0]) {
            roman += romanMatrix[i][1];
            num -= romanMatrix[i][0];
        }
    }
    outputDiv.innerText = roman;
}

// Corrected event listener setup
convertButton.addEventListener("click", convertToRoman);