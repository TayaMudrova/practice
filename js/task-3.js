/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням
 *? Виведіть у консоль усіх парних чисел від min до max
 */
const max = 50;
const min = 23;

const calculateNumber = (max, min) => {
  let total = 0;

  for (let i = max; i >= min; i--) {
    total += i;
  }
  return total;
};

console.log(calculateNumber(50, 23));
