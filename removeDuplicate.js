const arr = [1,2,3,3,2,2,3];


const result = arr.filter((item, index) => {
    console.log(item ,index, arr.indexOf(item))
    return arr.indexOf(item) === index
})

console.log(result)