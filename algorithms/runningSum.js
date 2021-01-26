/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

var runningSum = function(nums) {
    if(!nums.length) return [];
    let total = 0;
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
        newArr.push(total);
    }
    return newArr;
};

/**
 * Time Complexity: O(n) because we have to iterate through every element in the array to calculate current total
 * Space Complexity: O(n) we're allocating memory by creating a new array of n elements
 */

// Optimization: Change element values in place
// Space Complexity: O(1) because we're not creating a new array 

var runningSum = function(nums) {
    if(!nums.length) return [];
    let total = nums[0];
    for(let i = 1; i < nums.length; i++) {
        total += nums[i];
        nums[i] = total;
    }
    return nums;
};