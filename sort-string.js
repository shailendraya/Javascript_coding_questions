function bubbleSort(str) {
    let chars = str.split('');
    let len = chars.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
                // Swap characters
                let temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }

    return chars.join('');
}

const unsortedString = "hello";
const sortedString = bubbleSort(unsortedString);
console.log("Sorted string:", sortedString);
