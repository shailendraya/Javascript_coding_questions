

const removeFalseValue = (input) => {
    const result = []
    for(let val of input) {
        if(val) {
            result.push(val)
        }
    }
    return result;
}


console.log(removeFalseValue(["priya", 0 ,"", false, null,undefined, "ate", NaN ,9 ])) //["priya","ate",9]


