/**
 * Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    [2,2,1,1,1,2,2]
    sorted: [1,1,1,2,2,2,2]
    majority element will always be at center
 * 
 */

var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[Math.floor(nums.length / 2)];
};