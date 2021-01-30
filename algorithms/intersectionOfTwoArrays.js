// Given two arrays, write a function to compute their intersection.

/**
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 */

var intersection = function(nums1, nums2) {
    let hash1 = {};
    let hash2 = {};
    let result = [];
    
    for(let num of nums1) {
        hash1[num] > 0 ? hash1[num]++ : hash1[num] = 1;
    }
    
    for(let num of nums2) {
        hash2[num] > 0 ? hash2[num]++ : hash2[num] = 1;
    }
    
    for(let key in hash1) {
        if(key in hash2) {
            result.push(key);
        }
    }
    
    return result;
};

// Time Complexity: O(n + m) because we have to loop through both arrays
// Space Complexity: O(n + m) because we allocate memory for both arrays through hash maps