/**
  *? Напишіть програму, яка отримає від користувача
  *? число (кількість хвилин) та виведе в консоль
  *? рядок у форматі годин та хвилин
  *? 70 === 01:10
  */
function calculateTime(value) {
const min = String(value % 60).padStart(2, 0);
    const hours = String(Math.floor(value / 60)).padStart(2, 0);
    return `${hours}:${min}`;
}
console.log(calculateTime(320));
console.log(calculateTime(123));
console.log(calculateTime(1111));