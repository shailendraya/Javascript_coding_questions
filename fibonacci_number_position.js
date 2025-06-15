const recursion = (num) => {
    if(num === 1){
        return 1;
    }
    if(num <= 0) { return 0};
    return recursion(num-2) + recursion(num-1)
    
}

console.log(recursion(1))

// 1,2,3,4,5,6,7,8, 9, 10
// 0,1,1,2,3,5,8,13,21,34