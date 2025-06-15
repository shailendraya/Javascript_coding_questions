/* 
Generators (function*) allow pausing and resuming 
execution using yield.
*/

function* count() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterator = count();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  console.log(iterator.next().done);  // true
  