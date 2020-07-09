// Написать простой игровой бот, который умеет следующее:
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.


function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber = getRandomNumber(1, 1000);

function check(clientNumber) {
  if(isNaN(clientNumber));
  alert('Необходимо написать число')
}

function randomPlay() {
  do {
  var clientNumber = prompt('Система загадала определенное число от 1 до 1000. Как Вы думаете, какое?');
  if(clientNumber === null) {
    alert('Вы вышли из игры!')
    break;
  }
  else {
    clientNumber = parseInt(clientNumber);
    if(isNaN(clientNumber)){
      alert('Необходимо написать число.')
    }
    else {
      if(randomNumber > clientNumber){
        alert('Загаданное число больше. Попробуйте угадать снова.');
      }
      else if(randomNumber < clientNumber){
        alert('Загаданное число меньше. Попробуйте угадать снова.')
      }
      else {
        alert('Поздравляем! Вы угадали!')
      }
    }
  }
}
 while (clientNumber != randomNumber)
}

randomPlay();

do {
let rePlay = confirm("Сыграем снова?");
if(rePlay){
randomPlay();
}
else {
  alert('Спасибо за игру!');
}
}
while (rePlay);