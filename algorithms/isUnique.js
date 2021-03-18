// Implement an algorithm to determine if a string has all unique characters. What if you can't use additional data structures?

/**
 * 1. use a hash map to store characters, if unique charaters exceeds 1 return false
 * - if we reach the end, return true
 * 
 * 2. sort the string and use two pointers
 * if arr[i] === arr[i + 1] return false
 * else return true
 */


// function isUnique(str) {
//   if(!str.length || str.length === 1) return true;
//   let hash = {};

//   for(let letter of str) {
//     if(!hash[letter]) {
//       hash[letter] = 1;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// Time Complexity: O(n)  need to do linear search on whole string
// Space Complexity: O(1) / O(n) because space will not exceed 26 characters

// sorting
function isUnique(str) {
    str = str.split('').sort().join('');
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === str[i + 1]) {
        return false;
      }
    }
  
    return true;
  }

  // Time: O(n log n) because of sorting
  // Space: O(1) 
  
  console.log(isUnique('danny'));