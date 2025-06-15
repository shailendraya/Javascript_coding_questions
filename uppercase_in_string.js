const input = 'i am a developer';

const result = input.split(' ').map((data) => {
    
    return data.slice(0,1).toUpperCase() + data.slice(1)
})

console.log(result)

// console.log(result[3].slice(0,1).toUpperCase() + result[3].slice(1))