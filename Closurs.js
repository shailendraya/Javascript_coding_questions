const outerFunction = () => {
    let outerVariable = 'I am from outer function';

    let count = 0;
    const innerFunction = () => {
        console.log(count++)
        console.log(outerVariable); // Accesses outerVariable from outerFunction
        console.log('-------------------END----')
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outer function
innerFunc();

innerFunc();

// -----------------------------------------------------------

function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyByTwo = makeMultiplier(2);
console.log(multiplyByTwo(100)); // Output: 10

const multiplyByTen = makeMultiplier(10);
console.log(multiplyByTen(5)); // Output: 50


