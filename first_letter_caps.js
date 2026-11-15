function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello")); // Output: "Hello"


const test = 'i am shailendra nagina'

const reverse = (input) => {
    return input.split(' ').map((item) => {
        const temp = item.split('').reverse().join('');
        return temp.charAt(0).toUpperCase() + temp.slice(1)
    }).join(' ')
}

console.log(reverse(test))