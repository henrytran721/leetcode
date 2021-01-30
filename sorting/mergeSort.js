function merge(arr1, arr2) {
    var i = 0;
    var j = 0;
    var result = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    console.log("left: " + arr.slice(0, mid));
    console.log("right: " + arr.slice(mid));
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([44, 33, 1, 2, 6, 99, 5]));