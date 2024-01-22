let random_no = Math.floor(Math.random() * 100);
let tries = 0;

function checkGuess() {
  let user_input = document.getElementById('userInput').value;
  user_input = parseInt(user_input);

  if (isNaN(user_input)) {
    alert('Please enter a valid number.');
    return;
  }

  tries += 1;
  let resultElement = document.getElementById('result');

  if (random_no > user_input) {
    resultElement.innerHTML = 'Your guess is less than the Magic Number';
  } else if (random_no < user_input) {
    resultElement.innerHTML = 'Your guess is greater than the Magic Number';
  } else {
    resultElement.innerHTML = `Congratulations! You guessed the Magic Number in ${tries} tries!`;
    resultElement.style.color = '#e44d26';

    // Add class to trigger blinking animation
    resultElement.classList.add('blink-once');

    // Remove the class after the animation completes
    setTimeout(() => {
      resultElement.classList.remove('blink-once');
    }, 500); // Adjust the timeout to match your CSS animation duration
  }

  // Clear the input box
  document.getElementById('userInput').value = '';
}

// Add event listener for Enter key
document.getElementById('userInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});
