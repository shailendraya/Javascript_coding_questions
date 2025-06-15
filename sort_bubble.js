let arr1 = [3, 1, 9, 7, 5];
let arr2 = [10, 2, 4, 80, 6, -1];

// Merge arrays
let output = arr1.concat(arr2);

// Bubble Sort
for(let i=0; i<output.length-1; i++){
    for(let j=0; j<output.length-i-1; j++){
        if(output[j] > output[j+1]){
            const temp = output[j];
            output[j] = output[j+1];
            output[j+1] = temp
        }
        
    }
}

console.log(output); 
