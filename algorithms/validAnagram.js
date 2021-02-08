// Given two strings s and t , write a function to determine if t is an anagram of s.

/**
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

var isAnagram = function(s, t) {
    /**
    first approach: use sorting and then compare if strings are equal O(n log n) because of sorting
    second approach: use a hash map, to store occurances of each letter
    */
    
    if(s.length !== t.length) return false;
    
    // first approach
    // s = s.split('').sort().join('');
    // t = t.split('').sort().join('');
    // return s === t;
    
    // Time Complexity: O(n log n), Space Complexity: O(1)
    
    // second approach
    let hash = {};
    
    for(let letter of s) {
        hash[letter] > 0 ? hash[letter]++ : hash[letter] = 1;
    }
    
    for(let letter of t) {
        if(letter in hash && hash[letter] > 0) {
            hash[letter]--;
        } 
    }
    
    for(let key in hash) {
        if(hash[key] > 0) return false;
    }
    
    return true;
    
    // Time Complexity: O(n) Space Complexity: O(1) size of hash map will never exceed 26 b/c of alphabet
};