// 1. Написать программу, которая выводит текущую дату в полном русскоязычном формате, 
// например: “Сегодня 8 декабря 2018 года, суббота, 20 часов 6 минут 54 секунды”. 
// Следует обратить внимание на правильные склонения слов “час”, “минута”, “секунда”. 
// с помощью стандартной функции setInterval сделать так, чтобы сформированная строка 
// с датой и временем отображалась в консоли каждую секунду.
// Продвинутый уровень: с помощью стандартной функции setInterval сделать так, чтобы 
// сформированная строка с датой и временем отображалась в консоли каждую секунду.


function regDate () {
var Data = new Date();

var Year = Data.getFullYear();
var Month = Data.getMonth();
var Day = Data.getDate(); // число
var WeekDay = Data.getDay(); // день недели
var Hour = Data.getHours();
var Min = Data.getMinutes();
var Sec = Data.getSeconds();

switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

switch (WeekDay)
{
    case 0: fWeekDay="воскресенье"; break;
    case 1: fWeekDay="понедельник"; break;
    case 2: fWeekDay="вторник"; break;
    case 3: fWeekDay="среда"; break;
    case 4: fWeekDay="четверг"; break;
    case 5: fWeekDay="пятница"; break;
    case 6: fWeekDay="суббота"; break;
}

switch (Hour)                                    //А ВОТ И СВИТЧИ С КЕЙСАМИ))
{
    case (Hour == 1 || Hour == 21): fHour=Hour + " час"; break;
    case (Hour >= 2 || Hour <= 4): fHour=Hour + " часа"; break;
    default: fHour=Hour + " часов";
}

switch (Min)
{
    case (Min == 1, 21, 31, 41, 51): fMin=Min + " минута"; break;
    case (Min >= 2 && Min <= 4 || Min >= 22 && Min <= 24 || Min >= 32 && Min <= 34|| Min >= 42 && Min <= 44|| Min >= 52 && Min <= 54): fMin=Min + " минуты"; break;
    default: fMin=Min + " минут";
}

switch (Sec)
{
    case (Sec == 1, 21, 31, 41, 51): fSec=Sec + " сенкунда"; break;
    case (Sec >= 2 && Sec <= 4 || Sec >= 22 && Sec <= 24 || Sec >= 32 && Sec <= 34|| Sec >= 42 && Sec <= 44|| Sec >= 52 && Sec <= 54): fSec=Sec + " секунды"; break;
    default: fSec=Sec + " секунд";
}

let i = +Day+" "+fMonth+" "+Year+" года, "+fWeekDay+", "+fHour+" "+fMin+" "+fSec+".";

return i
}