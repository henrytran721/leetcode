var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let result = '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
};


// Time O(n^2)
// Space O(n)