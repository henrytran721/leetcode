/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Ex: 
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
   Output: 6
   Explanation: [4,-1,2,1] has the largest sum = 6.
 */

var maxSubArray = function(nums) {
    var currMax = -Infinity;
    var max = 0;
    for(let i = 0; i < nums.length; i++) {
        // determine larger number between current index or currMax + current index
        currMax = Math.max(nums[i], currMax + nums[i]);
        // determine max of currMax and max
        max = Math.max(max, currMax);
    }
    return max;
};

/**
 *  nums = [-2,1,-3,4,-1,2,1,-5,4]
 *  index   currMax    max
 *    0       -2        0
 *    1        1        1    currMax(1,-1) = 1
 *    2       -2        1    currMax(-3,(-3 + 1)) = -2
 *    3        4        4    currMax(4, (4 + -2)) = 4
 *    4        3        4    currMax(-1, (4 + -1)) = 3              
 *    5        5        5    currMax(2, (3 + 2)) = 5
 *    6        6        6    currMax(1, (5 + 1)) = 6
 * 
 *   Dynamic programming builds up starting at 4 and determines currMax by adding next 3 elements
 * 
 *   Big O 
 *   Time: O(n) looping through elements in array
 *   Space: O(1) no resources created to allocate for extra memory
 */     