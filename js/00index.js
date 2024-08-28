// JavaScript function to check age and display a message
function checkAge() {
    // Get the input field value by its ID
    const age = document.getElementById("age-input").value;
    
    // Get the paragraph element to display the message
    const message = document.getElementById("age-message");
    
    // Check if age is 18 or older
    if (age >= 18) {
        message.textContent = "You can vote!";
    } else {
        message.textContent = "You are a teenager! Go and see Doremon.";
    }
}

// Get the button element by its ID and attach a click event listener
document.getElementById("check-age-button").addEventListener("click", checkAge);
