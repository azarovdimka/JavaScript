// Написать программу, которая последовательно запрашивает у пользователя 
// два числа, после чего сравнивает их и выводит одно из сообщений: 
// “Первое число больше второго”, “Второе число больше первого” или 
// “Числа равны”. Необходимо учесть ситуации, когда пользователь вместо 
// числа ввел строку или вообще не ввел ничего. Для получения числа от 
// пользователя пригодится функция prompt, а для вывода – alert.

let firstNumber = parseInt(prompt("Давайте сравним числа. Введите первое число:"));
if (isNaN(firstNumber)) {
 do {
 alert("Нужно писать число!");
 firstNumber = parseInt(prompt("Всё-таки введите первое число:"));
 } while (isNaN(firstNumber));
}

let secondNumber = parseInt(prompt("Прекрасно! Введите второе число:"));
if (isNaN(secondNumber)) {
  do {
  alert("Нужно написать еще одно число!");
  secondNumber = parseInt(prompt("Введите еще одно число:"));
  } while (isNaN(secondNumber));
 }

if (firstNumber > secondNumber) {
   alert('Первое число больше второго');
  }
  else if (firstNumber < secondNumber) {
    alert('Второе число больше первого');
  }
  else {
    alert('Числа равны');
}