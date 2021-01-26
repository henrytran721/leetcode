
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// var rotate = function(nums, k) {
//     // loop from 0 to k. This will tell us how many rotates we will need to make
//     // retrieve last element in the array
//     // rotate
//     for(let i = 0; i < k; i++) {
//         var prev = nums[nums.length - 1];
//         for(let j = 0; j < nums.length; j++) {
//             var temp = nums[j];
//             nums[j] = prev;
//             prev = temp;
//         }
//         console.log(nums);
//     }
// };

var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        let poppedNum = nums.pop();
        nums.unshift(poppedNum);
    }
    return nums;
};


/** Time Complexity: 
 *  O(k + n) because k determines how many steps we have to rotate and n is the number of items we have to iterate through
 * 2nd Solution: O(k + n) also because k determines how many  steps needed to rotate, once rotated we need to reindex each element in the array -> requires O(n) time
 * 
 * Space: O(1) doesn't require any extra space
 */