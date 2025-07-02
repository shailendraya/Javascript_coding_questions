function debounce(func, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
 
function add(a, b) {
    console.log(a + b);
}

const debounceAdd = debounce(add, 100);

debounceAdd(1, 2);  // This call will be cancelled
debounceAdd(3, 4);  // Only this call will be executed after 100ms
