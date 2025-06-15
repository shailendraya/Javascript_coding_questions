const arr = [1,2,3,4,3,2,4,7,8,4];
var temp;
for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i] < arr[j]){
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp
        }
    }
}
console.log(arr[1])