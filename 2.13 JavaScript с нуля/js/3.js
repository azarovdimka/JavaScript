// Написать программу, которая последовательно запрашивает у пользователя 
// числа при помощи prompt, пока он не нажмет “Отмена”. После нажатия “Отмена”, 
// программа выводит сумму введенных чисел при помощи alert. Если пользователь 
// ввел не число (а, например, строку), то это значение не суммируется с остальными.

var sum = 0;
do {
  var value = prompt("Введите число");
  if (value == parseInt(value)) {
    value = +value;
    sum += value;
  }
} while (value != null);
alert( 'Сумма: ' + sum)
