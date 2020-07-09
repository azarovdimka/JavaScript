// разделить программу на два файла: main.js (основной запускающий код программы) и lib.js (код модуля для загадывания чисел);
// оформить код lib.js в виде модуля с использованием IIFE, который выносит в глобальную зону видимости (window) только одну функцию (например, start) для старта игры;
// соответственно, main.js должен вызывать функцию start, которая объявлена в файле lib.js;
// загаданное число и кол-во попыток пользователя должны храниться «в замыкании», то есть во внешней по отношению к функции start зоне видимости 
// (чтобы к ним не было доступа из глобальной зоны видимости и их нельзя было легко поменять);
// кол-во попыток пользователя должно быть ограничено: 10 (после этого выводится сообщение-предложение начать игру заново).


(function() {
  var count = 0;
  const MAX_COUNT = 10; // максимальный лимит попыток


  window.start = function () {          // глабальная зона                   
    randomPlay();                       // запуск игры
  }
                                        // все остальное и само загаданное число - в замыкании ниже, и недоступны на внешнем уровне
  function randomPlay() {                //функция игры             
                                                                                                       
    function getRandomNumber(min, max){  //генерация случайного числа
    return Math.floor(Math.random() * (max - min)) + min;
    }                            

    let randomNumber = getRandomNumber(1, 1000);    //запись числа в переменную
  
   do {
    var clientNumber = prompt('Система загадала определенное число от 1 до 1000. \nКак Вы думаете, какое число загадано?');
        if(clientNumber === null) {            //клавиша отмена
          alert('Вы вышли из игры!')
          break;
        }
        else {
          clientNumber = parseInt(clientNumber);  //проверка на число
            if(isNaN(clientNumber)){
            alert('Необходимо написать число.')
            }
            else {
             
                if(randomNumber > clientNumber){  //сравнение чисел
                  count++;                                       // <-- счетчик                                                        
                  alert('Загаданное число больше. \nЭто была ' + count + '-я попытка из ' + MAX_COUNT + '.');
                  }
                if(randomNumber < clientNumber){
                  count++;                                       // <-- счетчик      
                  alert('Загаданное число меньше. \nЭто была ' + count + '-я попытка из ' + MAX_COUNT + '.');
                  }
                if(randomNumber == clientNumber) {
                  alert('Поздравляем! Вы угадали!');
                  count = 0;
                  break;
                  }
                if(count == MAX_COUNT) {
                  alert('Вы превысили лимит попыток. Игра окончена.');            // <-- условие, если количество попыток превышено
                  count = 0;
                  break;
                  
                }
              }
            }
          }
          while (clientNumber != randomNumber && count < MAX_COUNT);   
  
    let rePlay = confirm("Сыграем снова?");

    do {
      if(rePlay){
        start();
      }
      else {
        alert('Спасибо за игру!');
        break;
      }
    }
    while (rePlay);

}
})()

