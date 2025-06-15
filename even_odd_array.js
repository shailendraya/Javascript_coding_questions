const arr = [1,2,3,4,5,6,7,8,9, 21, 55, -2, 100];

const even = [];
const odd = []
for (i=0; i<arr.length; i++){
    Math.abs(arr[i]) % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
}

console.log(even, odd)