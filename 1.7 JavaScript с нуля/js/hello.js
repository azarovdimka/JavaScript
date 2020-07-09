var myName = prompt('Как Вас зовут?') || "неизвестный";
var surName = prompt('А фамилия Ваша как?') || "пользователь";
var myBirthYear = prompt('Теперь введите год Вашего рождения') || "0";

var currentYear = 2020;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет, ' + myName + ' ' + surName + '!');
}
else if (age >= 20 && age <= 40) {
  alert('Добрый день, ' + myName + ' ' + surName + '!');
}
else {
  alert('Здравствуйте, уважаемый ' + myName + ' ' + surName + '!');
}