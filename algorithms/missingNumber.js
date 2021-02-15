// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    nums = nums.sort((a,b) => a - b);
    for(let i = 0; i <= nums.length; i++) {
        if(i !== nums[i]) {
            return i;
        }
    }
};

// O(n log n) time O(1) space 

var missingNumber = function(nums) {
    let map = {};
    
    for(let num of nums) {
        map[num] = true;
    }
    
    for(let i = 0; i <= nums.length; i++) {
        if(!(i in map)) {
            return i;
        }
    }
};

// O(n) time
// O(n) space