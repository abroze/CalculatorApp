let resetDisplay = false; // Initialize a flag to track when to reset the display.
let isOperationPerformed = false; // Initialize a flag to track if an operation is performed.

function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    if (resetDisplay) {
        if (isNaN(value)) {
            // Use the existing result as the first operand for a new operation.
            display.value = display.value + value;
            isOperationPerformed = false;
        } else {
            // Reset the display with the new digit.
            display.value = value;
            isOperationPerformed = false;
        }
        resetDisplay = false; // Reset the flag.
    } else {
        display.value += value; // Append to the existing value.
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
    resetDisplay = false; // Reset the flag.
    isOperationPerformed = false; // Reset the flag.
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        if (isFinite(result)) {
            display.value = result;
            resetDisplay = true; // Set the flag to reset the display after a calculation.
            isOperationPerformed = true; // Set the flag to indicate that an operation has been performed.
        } else {
            display.value = "Error: Division by zero";
            resetDisplay = true; // Set the flag to reset the display after an error.
        }
    } catch (error) {
        display.value = "Error";
        resetDisplay = true; // Set the flag to reset the display after an error.
    }
}
