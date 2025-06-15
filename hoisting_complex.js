var a = 10;
function outer() {
  console.log(a);  // ?
  var a = 20;

  function inner() {
    console.log(a);  // ?
    a = 30;
    console.log(a);  // ?
  }
  
  inner();
  console.log(a);  // ?
}
outer();
console.log(a);  // ?
