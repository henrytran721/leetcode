// bubble sort 

function bubbleSort(arr) {
  for(let i = arr.length; i >= 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4,3,5,1,2]));

// selection sort
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }

  return arr;
}


console.log(selectionSort([4,3,5,1,2]));

// insertion sort
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for(var j = i - 1; j >= 0; j--) {
      if(currVal < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = currVal;
  }

  return arr;
}


console.log(insertionSort([1,2,9,76,4]));

// merge sort

function merge(arr1, arr2) {
  var i = 0; 
  var j = 0;
  let result = [];

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
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([44, 33, 1, 2, 6, 99, 5]));

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