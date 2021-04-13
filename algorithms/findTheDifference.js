// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

var findTheDifference = function(s, t) {
    
    // sorting
    s = s.split('').sort();
    t = t.split('').sort();
    
    for(let i = 0; i < t.length; i++) {
        if(t[i] !== s[i]) {
            return t[i];
        }
    }
    
    
    // hash map
    
    let hash = {};
    
    for(let letter of t) {
        hash[letter] > 0 ? hash[letter]++ : hash[letter] = 1;
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in hash && hash[s[i]] > 0) {
            hash[s[i]]--;
        }
    }
    
    for(let key in hash) {
        if(hash[key]) {
            return key;
        }
    }
};

// sorting Time: O(n log n) Space: O(1)

// hash map Time: O(n) Space: O(n)