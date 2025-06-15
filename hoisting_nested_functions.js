var a = 1;

function first() {
  console.log(a);  // ?
  var a = 2;
  second();
}

function second() {
  console.log(a);  // ?
}

first();
