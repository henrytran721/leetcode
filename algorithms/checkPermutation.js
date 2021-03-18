function checkPermution(str1, str2) {
    if(str1.length !== str2.length) return false;
  
    let hash = {};
  
    for(let letter of str1) {
      hash[letter] > 0 ? hash[letter]++ : hash[letter] = 1;
    }
  
    for(let letter of str2) {
      if(letter in hash && hash[letter] > 0) {
        hash[letter]--;
      } else {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(checkPermution('saay', 'aasy'));

/**
 * Time: O(n + m)
 * Space: O(n)
 */