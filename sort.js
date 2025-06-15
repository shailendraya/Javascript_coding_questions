const data = [12,23,2,3,10,29];

for(let i=0; i<data.length-1; i++){
    for(j=0; j< data.length - 1 -i; j++){
        if(data[j] > data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
    // return data;
}

console.log(data)



const selectionSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the index of the smallest element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

const arr = [1, 3, 4, 5, 2, 4, 6];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 4, 5, 6]
