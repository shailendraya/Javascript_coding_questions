const arr = [{name1: 1}, {name2:2}, {name1:1}]

const output =(arr) => {

    return arr.reduce((acc, item) => {
        Object.entries(item).map(([key, value]) => {
            console.log(key, value)
            
            if(!acc[key]) {
                acc[key] = []
            }
            acc[key].push(value);
        })
        return acc
    }, {})
    
    
}

console.log(output(arr))


const arr = [{ name1: 1 }, { name2: 2 }, { name1: 1 }];

const output2 = (arr) => {

    const result = {};

    arr.forEach((item) => {

        Object.entries(item).forEach(([key, value]) => {

            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(value);

        });

    });

    return result;
};

console.log(output2(arr));

