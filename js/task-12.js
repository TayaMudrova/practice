/**
 *? Напишіть функцію updateObject, яка приймає об'єкт робить копію та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 */

const obj = { a: 1, b: 2, c: 3 };
function del(obj, value) {
    const newObj = {
        ...obj,
    }
    delete newObj[value];
    return newObj;
}

console.log(del(obj, 'b'));
