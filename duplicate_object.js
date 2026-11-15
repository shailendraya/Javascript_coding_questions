const arr = [{name: 1}, {name:2}, {name:1}]


// const unique = arr.filter((item, index, self) =>
//   index === self.findIndex(obj => obj.name === item.name)
// );

// console.log(unique); // Output: [ { name: 1 }, { name: 2 } ]



const duplicateRemove = arr.filter((item,index, self) => {
    // console.log(index, arr)
    
    return index === arr.findIndex(obj => obj.name === item.name)
})

console.log(duplicateRemove)