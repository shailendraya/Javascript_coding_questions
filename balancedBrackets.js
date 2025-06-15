
const checkBalance = (input) => {
    const brackets = {
        '(':')',
        '{':'}',
        '[': ']'
    }
    
    // console.log(Object.values(brackets))
    const temp = [];
    
    for(let char of input) {
        if(brackets[char]){
            temp.push(char)
        } else if(Object.values(brackets).includes(char)) {
            const last = temp.pop();
            // console.log('last', last, char)
            if(brackets[last] !== char){
                return false
            }
        }
    }
    // console.log(temp)
    return temp.length === 0;
}

console.log(checkBalance('({})[{}]'));

// -------------------------------------------------------------------


const input = ['(','(','{',')',')','}'];
// const {
//     '}'
// }

const stack = [];

const check = (input) => {
        const bracketPairs = { ')': '(', '}': '{', ']': '[' };
    for(let value of input) {
        if(value === '(' || value === '{' || value === '[') {
            stack.push(value)
        } else {
            if(stack.length === 0 || bracketPairs[value] !== stack[stack.length -1]) {
                return {stack1: stack, result: false}
            }
            stack.pop();
        }
    }    
    return {stack2: stack, result: stack.length};
}


// console.log(check(input));
console.log(check(['{', '(', '{', ')', ')', '}'])); // ✅ true
