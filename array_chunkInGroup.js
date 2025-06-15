
const input = [1,2,3,4,5,6,7,8]
const outputArray = []
const chunkArray = (input, size) => {
    const temp = [];
    
    while(input.length>0){
        temp.push(input.splice(0, size)) ;
    }
    // console.log(temp)
    return temp;
}
console.log(chunkArray(input, 2))