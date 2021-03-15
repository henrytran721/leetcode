
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
        let end = nums.pop();
        nums.unshift(end);
    }
};

// [1,2,3,4,5,6,7]
// run operation k number of times
// remove from the end and add to the beginning

// Time O(k)
// Space O(1)