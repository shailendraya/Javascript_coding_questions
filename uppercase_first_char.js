const input = "convert first char into uppercase for every word of sentence";


const result = (input) => {
    return input.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join( '')
}

console.log(result(input))