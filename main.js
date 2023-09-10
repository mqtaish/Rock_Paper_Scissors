const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if (!choice.classList.contains('disabled')) { // Check if the image is clickable
            const userChoice = choice.id;
            const computerChoice = options[Math.floor(Math.random() * 3)];

            // Hide the clicked choice image in the result
            choice.style.display = 'none';

            // Disable the clicked choice
            choice.classList.add('disabled');

            // Disable other choices
            choices.forEach(otherChoice => {
                if (otherChoice !== choice) {
                    otherChoice.classList.add('disabled');
                }
            });

            // Disable result message from being clicked
            result.style.pointerEvents = 'none';

            displayResult(userChoice, computerChoice);
        }
    });
});

restartButton.addEventListener('click', () => {
    // Reset the display of all choice images
    choices.forEach(choice => {
        choice.style.display = 'inline';
        choice.classList.remove('disabled'); // Remove the disabled class
    });

    // Enable result message to be clickable again
    result.style.pointerEvents = 'auto';

    // Reset the result message
    result.innerHTML = '<p>Choose an option...</p>';
});

function displayResult(userChoice, computerChoice) {
    const resultMessage = `You chose ${userChoice}. The computer chose ${computerChoice}.`;
    let message = '';

    if (userChoice === computerChoice) {
        message = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        message = 'You win!';
    } else {
        message = 'Computer wins!';
    }

    // Display your choice and the computer's choice in the result
    result.innerHTML = `${message}`;

    // result.innerHTML = `${resultMessage}<br><img src="${userChoice}.png" alt="${userChoice}"> vs <img src="${computerChoice}.png" alt="${computerChoice}"><br>${message}`;
}
