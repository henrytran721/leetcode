// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

var removeDuplicates = function(nums) {
    var i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

/** [1,2,2]
 *     i
 *       j
 *   Use two pointer approach
 * 
 *  Big O 
 *  Time: O(n) because we are iterating over the array
 *  Space Complexity: O(1) because we are not allocating any extra memory in the form of an object or array
 *  */ 

