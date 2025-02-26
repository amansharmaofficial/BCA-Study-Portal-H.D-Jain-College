// script.js
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    document.getElementById('randomNumberResult').textContent = `Random Number: ${randomNumber}`;
}
