// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

var largeGroupPositions = function(s) {
    var i = 0;
    var j = 0;
    var count = 0;
    var result = [];
    if(!s.length) return result;
    
    while(i < s.length) {
        let arr = [];
        if(s[i] === s[j]) {
            count++;
        } else {
            console.log(count);
            if(count >= 3) {
                arr.push(i,j - 1);
                result.push(arr);
            }  
            i = j;
            count = 1;
        }
        j++;
    }
    return result;
};

// "abbxxxxzzy"
//     i
//        j