/**
 * Selection sort finds the smallest element and swap with the current index
 * sorts on the left bound --> right
 */

 function selectionSort(arr) {
     for(let i = 0; i < arr.length; i++) {
         var lowest = i;
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

 console.log(selectionSort([5,3,4,1,2]))