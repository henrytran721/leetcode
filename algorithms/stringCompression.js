// Compress the string into this format: aaabbbbcc a3b4c2

function compressStr(str) {
    let i = 0; 
    let j = 0;
    let count = 0;
    let compressed = '';
    if(!str.length) return compressed;
    while(i < str.length) {
      if(str[i] !== str[j]) {
        compressed += str[i] + count;
        count = 1;
        i = j;
      } else {
        count++;
      }
      j++
    }
  
    return compressed;
  }


// Time Complexity: O(n)
// Space Complexity: O(1)
