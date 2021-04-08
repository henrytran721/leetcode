// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(needle.length > haystack.length) return -1;
    
    let first = needle[0];
    var i = 0;
    
    console.log(haystack, first);
    while(i < haystack.length) {
        if(haystack[i] === first) {
            let str = haystack.substr(i, needle.length);
            if(str === needle) return i;
        }
        i++;
    }
    
    return -1;
};

// if empty string return 0 
// if needle isn't found return -1

// loop through haystack
// if needle[0] is found continue search by creating 
// a copy of substr from index to needle.length
// if needle === copy return true
// else continue the search

// Time Complexity: O(n) based on how long the haystack is 
// Space: O(n) based on how long the needle string is we create a variable to store 