/**
 *? Дано рядок, що складається із символів, наприклад, 'abcde'.
 *? Перевірте, що першим символом цього рядка є буква 'a'.
 *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */

const checkSymbol = (string) => {
  // return string.startsWith("a") ? "так" : "ні";
  return string[0] === "a" ? "так" : "ні";
};

console.log(checkSymbol("abcde"));
