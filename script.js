'use strict';

// document.querySelector('.message').textContent = '🤗 Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').te xtContent = 10;
// document.querySelector('.guess').value = 23;

/**
 * Реализуйте функцию отдыха в игре, чтобы игрок мог сделать новую догадку!
Ваши задачи:
3. Восстановите начальные условия для полей ввода сообщения, числа, счета и угадывания
поля
4. Также восстановите исходный цвет фона (#222) и ширину номера (15rem).

 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😶‍🌫️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤗 Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // add a background
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😢 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Challenge#1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; // add a background
  document.querySelector('.number').style.width = '15rem';
});
