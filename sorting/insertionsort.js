
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        for(var j = i - 1; j >= 0; j--) {
            if(arr[j] > currVal) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));