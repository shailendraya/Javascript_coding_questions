console.log(x);  // ?
var x = 5;

function hoist() {
  console.log(y);  // ?
  var y = 10;
  console.log(y);  // ?
}
hoist();

console.log(z);  // ?
var z = function() {
  console.log("This is a function expression");
};
z();
