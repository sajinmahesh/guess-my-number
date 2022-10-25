'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector(`.message`).textContent);
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //not a number value
  if (!guess) {
    displayMessage('not a number ❌');
  }
  //guess equal to number
  else if (guess === secretNumber) {
    displayMessage('right answer 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high 📈' : 'too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message ').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess greater than number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too high 📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message ').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //guess less than number
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too low 📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message ').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//gaeme rest functionallity

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('start guessing....');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
});
