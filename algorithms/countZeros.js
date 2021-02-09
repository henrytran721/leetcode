// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    for(let i = nums.length - 1; i >= 0; i--) {
        if(!nums[i]) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)