/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
  */
const answer = prompt("Введіть логін");
function chekPasword(answer) {
  if (answer === "Адмін") {
    const pasword = prompt("Введіть пароль");
    if (pasword) {
        if (pasword === "Я головний") {
             return "Здрастуйте!";
        }
        else {
           return "Невірний пароль!";  
        }
    }
    else {
       return "Скасовано";   
    }
}
else {
      return "Я вас не знаю";
    }     
}

console.log(chekPasword(answer));