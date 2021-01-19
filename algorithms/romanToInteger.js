/**
 * Given a roman numeral, convert it to an integer.
 */

var romanToInt = function(s) {
    var map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    var res = 0;
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] < map[s[i + 1]]) {
            res -= map[s[i]];
        } else {
            res += map[s[i]];
        }
    }
    
    return res;
};

/**
 * Big O 
 * Runtime: O(n) based on how many characters we have to look at in the roman numerals
 * Space: O(1) we create a pre-defined hashmap with 7 elements only
 */