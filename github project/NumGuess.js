function NumGuessGame() {
    const secretNumber = 56; // Generate random number between 1 and 100
    let attempts = 5; // Number of attempts allowed

    while (attempts > 0) {
        let guess = parseInt(prompt("Guess the secret number (between 1 and 100):"));

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        if (guess === secretNumber) {
            alert(`Congratulations! You've guessed the number!The number was ${secretNumber}.`);
            return; // Exit the game if guessed correctly
        } else if (guess < secretNumber) {
            alert("The number is low.");
        } else {
            alert("The number is high.");
        }

        attempts--;
    }

    alert(`Game over! The correct number was ${secretNumber}.`);
}

// Start the game
NumGuessGame();
