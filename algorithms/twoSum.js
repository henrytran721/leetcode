/**
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        /** 
         * if we encounter our current value as a difference between target - nums[i] (previously recorded)
         * we have found a match, return the current index and the stored index
        */
        if(nums[i] in map) {
            return [i, map[nums[i]]];
        }
        // store differences in map with index as key, value
        map[target - nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));

/**
 * Big O
 * Runtime: O(n) linear time based on how many elements we have in the array
 * Space: O(n) increases based on number of elements in the array we have to insert into the map
 */


/** Brute Force Solution: Use two for loops, locking one number and checking the rest of the array with linear search
 *  Time Complexity: O(n^2)
 *  Space Complexity: O(1)
 */

 for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
        if(target - nums[j] === nums[i] && i !== j) {
            return [i, j];
        }
    }
}