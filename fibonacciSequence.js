const fibonacci = (num, output=[0,1]) => {
    if(output.length >= num) return output;
    console.log(output, output[output.length-2] , output[output.length-1])
    output.push(output[output.length-2] + output[output.length-1] );
    
    return fibonacci(num, output)
} 

console.log(fibonacci(6))

const fibo = (num) => {
    const output = [0,1]
    for(i=0; i<num-2; i++) {
        output.push(output[i] + output[i+1])
        // console.log(output)
    }
    return output
}

console.log(fibo(8))