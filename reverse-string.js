
const data = 'I am a developer';
// const result = 'I ma a repoleved';
const result  = data.split(' ').map((data) => {
    return data.split('').reverse().join('')
})

console.log(result)
