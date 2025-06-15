
// let acc = 0;
// function factorial(n) {
//     console.log(n)
//   if (n === 1) return 1;
  
//   return n* factorial(n - 1); // Tail-recursive call
// }
// console.log(factorial(5)); // 120


function factorial(n, acc = 1) {
    console.log(n)
  if (n === 1) return acc;
  return factorial(n - 1, n * acc); // Tail-recursive call
}
console.log(factorial(5)); // 120

