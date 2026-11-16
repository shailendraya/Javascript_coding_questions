const data = (arr) => {
    if (arr.length < 2) return 0;

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max - min;
};

console.log(data([1, 2, 3, 4, 5])); // 4
console.log(data([10, 2, 30, 4, 5])); // 28