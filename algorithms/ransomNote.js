// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

var canConstruct = function(ransomNote, magazine) {
    let hash = {};
    
    for(let letter of magazine) {
        hash[letter] > 0 ? hash[letter]++ : hash[letter] = 1;
    }
    
    // loop through ransomNote
    // check to see if letter exists in hash map and if frequency is greater than 0, subtract 1
    // if we never subtract return false
    
    for(let letter of ransomNote) {
        if(letter in hash && hash[letter] > 0) {
            hash[letter]--;
        } else {
            return false;
        }
    }
    
    return true;
};

// O(n + m) time, O(n) space