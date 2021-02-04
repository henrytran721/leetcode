// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

function searchMatrix(matrix, target){
    let left = 0;
    let right = matrix.length - 1;
    while(left < right) {
      let mid = Math.floor((left + right) / 2);
      // if our mid list is the boundaries of our target, do binary search on that list
          // console.log(matrix[mid], matrix[mid][matrix[mid].length - 1], matrix[mid][0]);
      // console.log(left, mid, right);
      if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
        return binarySearch(matrix[mid], target);
      } else if(matrix[mid][0] > target) {
          right = mid;
      } else if(matrix[mid][matrix[mid].length - 1] < target) {
          left = mid + 1;
      }
      // if greater than last element search to the right of the mid row
      // if less than first element search to the left of the mid row
  
    }
  }
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
      let mid = Math.floor((left + right) / 2);
      if(target === arr[mid]) {
        return true;
       } else if(target > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return false;
  }

// var searchMatrix = function(matrix, target) {
//     if(matrix.length === 0) return false;
//     for(let row of matrix) {
//         // make sure row values exist and find boundary for the row we want to search (first element is less than target and last element is greater than target)
//         if(row.length > 0 && row[0] <= target && row[row.length - 1] >= target) {
//             if(binarySearch(row, target)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return false;
// };


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length;
    
//     while(left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if(arr[mid] === target) {
//             return true;
//         } else if(arr[mid] > target) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
    
//     return false;
// }


// Time Complexity: O(n log n) because we search through the matrix at a run time of O(n) and binary search at a runtime of O(log n);

// var searchMatrix = function(matrix, target) {
//     let left = 0;
//     let right = matrix.length - 1;
    
//     while(left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
//             if(matrix[mid][0] === target || matrix[mid][matrix[mid].length - 1] === target) return true;
//             let leftPointer = 0;
//             let rightPointer = matrix[mid].length - 1;
//             // mid pointer within mid array we are searching
//             let midPointer = Math.floor((leftPointer + rightPointer) / 2);

//             while(leftPointer < rightPointer) {
//                 if(matrix[mid][midPointer] > target) {
//                     rightPointer = midPointer - 1;
//                 } else if(matrix[mid][midPointer] < target) {
//                     leftPointer = midPointer + 1;
//                 }
//             }
            
//             if(matrix[mid][midPointer] === target) {
//                 return true;
//             } 
//         } else if(matrix[mid][0] > target) {
//             right = mid;
//             console.log(left, mid, right);
//         } else if(matrix[mid][matrix[mid].length - 1] < target) {
//             console.log('left')
//             left = mid;
//         }
//     }
// };