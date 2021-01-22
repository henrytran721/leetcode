// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    var map = {};
    
    for(let num of nums) {
        map[num] > 0 ? map[num]++ : map[num] = 1;
    }
    
    for(let key in map) {
        if(map[key] === 1) {
            return key;
        }
    }
};

/**
 * Big O
 * Time: O(n) loop through the array to find single element
 * Space: O(n) allocate memory for the hash map
 *
 */