// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold te additional characters, and that you are given the "true" length of the string.

function urlify(s) {
    let insert = '%20';
    s = s.trim().split(' ').join(insert);
    return s;
  }
  
  
  console.log(urlify('Mr John Smith     '))