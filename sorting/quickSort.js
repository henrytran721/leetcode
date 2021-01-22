function pivot(arr, start = 0, end = arr.length) {
    let pivot = start;
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++) {
        if(arr[pivot] > arr[i]) {
            swapIndex++;
            let temp = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = temp;
        }
    }

    let temp = arr[pivot];
    arr[pivot] = arr[swapIndex];
    arr[swapIndex] = temp;

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right); 
    }
    return arr;
}

console.log(quickSort([4,7,6,1,3]));