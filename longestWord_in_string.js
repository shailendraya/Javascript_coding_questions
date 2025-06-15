var str = 'I am a indian';

const maxLength = -Infinity
let result 
   var str= str.split(' ')
for(let word of str){
    result = maxLength < word.length ? word : result
    // console.log(result)
}

console.log(result)


var str = 'I am a indian';
const output = str.split(' ').sort((a,b) => b.length - a.length)
console.log(output[0])