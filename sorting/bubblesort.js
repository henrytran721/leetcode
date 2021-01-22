/**
 * Sorting algorithm that takes the largest number and bubbles it to the top after every iteration
 */

 function bubbleSort(arr) {
     var swap;
     for(let i = arr.length; i >= 0; i--) {
         swap = false;
         for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
         }
         if(!swap) break;
     }

     return arr;
 }

 console.log(bubbleSort([5,3,2,1,4]));