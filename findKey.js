const findKey = (obj, value) => {
    // console.log(obj, value)
if (value in obj) return obj[value]; 
for(let key in obj) {
if (typeof obj[key] === "object") { // If value is an object
    const result = findKey(obj[key], value);
    if (result !== undefined) return result;

}
}
return undefined

};

const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(findKey(obj, "e"));  
