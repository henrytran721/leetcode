// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function(nums) {
    //     approach 1: find products of left and right and store into two arrays, loop over at the end and calculate left and right products
    // Time Complexity: O(n), Space Complexity: O(1)
        
    //     let left = [];
    //     let right = [];
    //     let result = [];
        
    //     left[0] = 1;
    //     for(let i = 1; i < nums.length; i++) {
    //         left[i] = nums[i - 1] * left[i - 1];
    //     }
        
    //     right[nums.length - 1] = 1;
    //     for(let i = nums.length - 2; i >= 0; i--) {
    //         right[i] = nums[i + 1] * right[i + 1]; 
    //     }
        
    //     for(let i = 0; i < nums.length; i++) {
    //         result[i] = left[i] * right[i];
    //     }
        
    //     return result;
        
        // approach 2: loop over with one array and find left values, loop over from end and multiply with right values
        // Time Complexity: O(n) Space Complexity: O(1), resulting array doesnt count toward space complexity
        let result = [];
        
        result[0] = 1;
        for(let i = 1; i < nums.length; i++) {
            // calculate left values
            result[i] = nums[i - 1] * result[i - 1];
        }
       
        let right = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * right;
            right = right * nums[i];
        }
        
        return result;
    };