const data = [1,2,3,4,3,2,3,1,1];

const output = {}
data.map((data, index) => {
    console.log(data, index, output[data])
    if(output[data]){
        console.log(output[data])
        output[data] = output[data] +1
    }else {
        output[data] = 1
    }
})

console.log(output)