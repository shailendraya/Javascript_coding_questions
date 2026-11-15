const data = [12,23,2,3,10,29];

const sortedArray = (data) => {
    for(let i=0; i<data.length-1; i++){
        for(let j=0; j<data.length-1-i; j++){
            console.log(data[i], data[j])
            if(data[j] > data[j+1]) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    return data;
}

console.log(sortedArray(data))