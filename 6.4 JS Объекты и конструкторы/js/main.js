// Написать простой прототип системы регистрации пользователей. Для этого используйте две ФУНКЦИИ-конструктора:
// 1. User, которая создает объект типа «пользователь» со следующими свойствами: { // имя firstName: ‘', // фамилия lastName: '’, 
    // дата и время регистрации regDate: ''}. Объекты типа User предназначены для сохранения каждой отдельной записи о пользователе.
// 2. UserList, которая создает объект типа “список пользователей” со следующими свойствами и методами: { // внутреннее свойство-массив, в которое будут попадать объекты типа User users: [], 
// метод получает в качестве параметра объект типа User и сохраняет его в массив users add: function(user) {}, // метод возвращает список пользователей из массива users getAllUsers: 
// function() {}}. Объекты типа UserList предназначены для хранения множества записей типа User. 
// При запуске программы должно происходить:
// 1. Создавать новый экземпляр объекта UserList (с пустым свойством-массивом users).
// 2. Открываться диалог prompt с предложением ввести имя и фамилию пользователя для регистрации (одной строкой через пробел).
// 3. После нажатия ОК должен создаваться новый экземпляр объекта User с заполнением свойств firstName, lastName и regDate (текущая дата и время).
// 4. Созданный экземпляр объекта должен сохраняться в свойство-массив users созданного ранее объекта типа UserList (при помощи метода add).
// 5. Диалог prompt должен повторяться, пока пользователь не нажмет “Отмена”.
// 6. После нажатия «Отмена» выведите на экран (в консоль или при помощи alert) список всех пользователей с именами и датами регистрации (используйте для этого метод getAllUsers).

 'use strict'

 function user (firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.regDate = function() {
         return i;
     }
 };

function UserList () {
    this.
    this.getAllUsers = function () {

    }
};

userList = [
    users.user = {}
];


var user = new User (prompt ('Введите через пробел имя и фамилию:'));
if (!user) {
do {
    alert("Оставлять строку пустой, вводить буквы или другие символы - запрещено");
 var user = new User (prompt ('Введите через пробел имя и фамилию:'));
} while (user != null);
};

User.add(user)