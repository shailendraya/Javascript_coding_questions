const data = (arr) => {
    let max = 0
    for(i=0;i<arr.length; i++) {
        for(j=i+1; j<arr.length; j++){
            // console.log(arr[i], arr[j])
            if(max < Math.abs(arr[i] - arr[j])){
                max = Math.abs(arr[i] - arr[j])
                // console.log(max, arr[i], arr[j])
            }
        }
    }
    return max
}


console.log(data([1,2,3,4,5]))