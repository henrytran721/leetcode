// Implement a method to perform basic string compression using the count of repeated characters. For example, the string aabcccccaaa returns a2b1c5a3.


// loop through string, if character is the same as the last increment count
// if character is different, add to result and start over 

function stringCompression(s) {
  if(s.length === 1) return s[0] + '1';
  let count = 1;
  let result = ''

  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i + 1]) {
      count++; 
    } else {
      result += s[i] + count;
      count = 1;
    }
  }

  return result;

} 

console.log(stringCompression('aabcccccaaa')) // a2b1c5a3

// Time Complexity: O(n)
// Space Complexity: O(1)