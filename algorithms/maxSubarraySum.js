/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Ex: 
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
   Output: 6
   Explanation: [4,-1,2,1] has the largest sum = 6.
 */

   var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    var currMax = nums[0];
    var max = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        max = Math.max(max, currMax);
    }
    
    return max;
};

// psuedo code 
/**
currMax storing curr maximum that we are looking at
max storing the maximum value we have looked at 

loop through the array, if curr number is > currMax
 - replace the currMax
 - every iteration set max to be the max of max and currMax (the largest we've seen)

*/

// [-2,1,-3,4,-1,2,1,-5,4]
// currMax: 1
// max: 6
// currMax = Math.max(currVal, currMax + currVal) 1 vs 6 (1 + 5)
// max = Math.max(max, currMax)


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