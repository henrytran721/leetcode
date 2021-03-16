/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * 
 * Input: [1,2,3,1]
 * Output: true
 */

var containsDuplicate = function(nums) {
    /**
     first approach: sort the list and use two pointers, if pointer values are equal return true O (n log n)
     
     second approach: use a hash map and store occurences, if occurences are greater than 1, return true O(n)
     This is the better solution because better runtime
    */
//     first approach
//     nums = nums.sort();
    
//     for(let j = 0; j < nums.length; j++) {
//         if(nums[j] === nums[j + 1]) {
//             return true;
//         }
//     }
//     return false;
    
//     Time Complexity: O(n log n) because of sort
//     Space Complexity: O(1)
    
    // second approach
    let hash = {};
    for(let num of nums) {
        hash[num] > 0 ? hash[num]++ : hash[num] = 1;
    }
    
    for(let key in hash) {
        if(hash[key] > 1) {
            return true;
        }
    }
    
    return false;
    
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};


// One Pass Solution, use the hash map insertion to our advantage

var containsDuplicate = () => {
    let hash = {};
    for(let num of nums) {
        if(hash[num] > 0) {
            return true;
        } else {
            hash[num] = 1;
        }
    }
    
    return false;
}