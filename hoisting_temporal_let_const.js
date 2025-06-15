console.log(a);  // ?
let a = 1;

function checkTDZ() {
  console.log(b);  // ?
  const b = 2;
  console.log(b);  // ?
}
checkTDZ();

if (true) {
  console.log(c);  // ?
  let c = 3;
}
