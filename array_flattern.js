const array = [1,2, [3,4, [5,6], [7,8], 9], [10, 11]];

const output = (arr, temp=[]) => {
    
    arr.map((data, i) => {
        if(Array.isArray(data)){
            return output(arr[i], temp)
        } else {
            temp.push(arr[i])
        }
    })
    return temp
}

console.log(output(array))