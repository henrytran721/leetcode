// Given a string write a function to check if it's a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 

function palindromePermutation(s) {
    s = s.trim().replace(/\s/g, '');
    let hash = {};
  
    for(let letter of s) {
      hash[letter] > 0 ? hash[letter]++ : hash[letter] = 1;
    }
  
    let unique = 0;
    for(let key in hash) {
      if(hash[key] === 1) {
        unique++;
      }
      if(unique > 1) return false;
    }
  
    return true;
  }
  
  console.log(palindromePermutation('tact coa'))
  console.log(palindromePermutation('add'))
  console.log(palindromePermutation('omm'))
  console.log(palindromePermutation('erarcca'))
  console.log(palindromePermutation('iceman'))
  // taco cat
  // palindrome has one letter with frequency of 1
  // racecar --> has 'e'
  // mom
  // dad
  
  // Time: O(n)
  // Space: O(n)