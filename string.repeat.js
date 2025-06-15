const input = 'shailendra';

const result = input.repeat(2);
console.log(result);


const repeatString = (str, sum=str, count=3) => {
    console.log(str, sum, count)
    if(count <= 1) {
        return sum
    }
    count--;
    repeatString(str, sum+str, count)
}

repeatString('AB');