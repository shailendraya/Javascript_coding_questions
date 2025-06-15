  
  const temp = [];
  
  const diffArrayElement = (arr1, arr2) => {
      
     return [
         ...arr1.filter((num) => !arr2.includes(num)),
         ...arr2.filter((num) => !arr1.includes(num))

         ]
  }
  
  console.log(diffArrayElement([1, 2, 3, 4,7, 0], [2, 3, 4, 5,8, -1, -3])); // [1, 5]


const diffArrayElement = (arr1, arr2) => {
  return [
      ...arr1.filter(num => !arr2.includes(num)),
      ...arr2.filter(num => !arr1.includes(num))
  ];
};

console.log(diffArrayElement([1, 2, 3, 4, 7, 0], [2, 3, 4, 5, 8, -1, -3]));
// Output: [1, 7, 0, 5, 8, -1, -3]


function diffArrayElement(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result = [];
  
    set1.forEach((element) => {
      if (!set2.has(element)) {
        result.push(element);
      }
    });
  
    set2.forEach((element) => {
      if (!set1.has(element)) {
        result.push(element);
      }
    });
  
    return result;
  }
  
  console.log(diffArrayElement([1, 2, 3, 4], [2, 3, 4, 5])); // [1, 5]
  