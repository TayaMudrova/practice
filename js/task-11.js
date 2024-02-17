// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const newPrice = (fruits) => {
  const newFruits = [];

  for (const fruit of fruits) {
    const price = fruit.price * 0.8;
    const id = Math.round(Math.random() * 1000);
    const newObj = {
      ...fruit,
      price,
      id,
    };
    newFruits.push(newObj);
  }
  return newFruits;
};

console.log(newPrice(fruits));

console.log(fruits);
