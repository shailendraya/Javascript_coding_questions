const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// 👉 { apple: 2, banana: 2, orange: 1 }
