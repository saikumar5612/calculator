// Function to append the clicked button's value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "0") {
        display.value = value; // Start fresh if display is "0"
    } else {
        display.value += value; // Append to existing value
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = "";
}

// Function to calculate the result based on the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.value = "Error"; // Handle invalid expressions
    }
}
