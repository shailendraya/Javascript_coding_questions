const Input = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

const findZeroSum = (data) => {
for(i=0; i<data.length; i++){
    for(j=1; j<data.length; j++){
        // console.log(data[i], data[j], data[i]+data[j]);
        if(data[i]+data[j] === 0){
            return [data[i], data[j]]
        }
    }
}
}

console.log(findZeroSum(Input))