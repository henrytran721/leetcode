function oneAway(s1, s2) {
    if(s1.length === s2.length) {
    // replace
    console.log('1')
    return checkReplace(s1, s2);
  } else if(s1.length + 1 === s2.length) {
    // insert
    console.log('2')
    return checkOneInsert(s1, s2);
  } else if(s1.length - 1 === s2.length) {
    // remove
    console.log('3')
    return checkOneInsert(s2, s1);
  }

  return false;
}
//          j
// pale paale
//    i    
function checkOneInsert(s1, s2) {
  let i = 0;
  let j = 0;

  while(i < s1.length && j < s2.length) {
    if(s1[i] !== s2[j]) {
      if(i !== j) {
        return false;
      }
      //  will move pointer twice if we have more than one insertion
      j++;
    } else {
      i++;
      j++;
    }
  }
  return true;
}


function checkReplace(s1, s2) {
  let foundDiff = false;
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) {
      if(foundDiff) return false;
      foundDiff = true;
    }
  }
  return true;
}

console.log(oneAway('pale', 'pales'))

// checkInsertOrRemove(s1, s2) {
  /**
   * determine if length is == 
   * determine if length is 1 less or 1 more and return true
   */
// pale, ple (remove)
// pales, pale (insert)
// pale, bale (replace)
// pale, bake (replace x2)