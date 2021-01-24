/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 */

var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    // keep track of current string / iterable
    var currStr = '';
    // keep track of longest seen string
    var longestStr = '';
    
    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        let index = currStr.indexOf(letter);
        
        if(index > -1) {
            if(longestStr.length < currStr.length) longestStr = currStr;
            currStr = currStr.slice(index + 1) + letter;
        } else {
            currStr += letter;
        }
    }
    
    if(currStr.length > longestStr.length) longestStr = currStr;
    console.log(longestStr);
    return longestStr.length;
};