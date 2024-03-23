'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent ='10';
// document.querySelector('.score').textContent = '20';
// document.querySelector('.guess').value = 23;

// to get number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //  there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No Number';

    // when players wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else {
    // When guess is incorrect
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? ' 📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score; // Update the score display
    } else {
      document.querySelector('.message').textContent = ' 💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// set the Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
