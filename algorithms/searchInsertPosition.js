/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 */

 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    // if found in binary search, return the index
    while(start < end) {
        var mid = Math.floor((start + end) / 2);
        console.log(nums[start], nums[mid], nums[end]);
        if(target === nums[mid]) {
            return mid;
        } else if(target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    // if not found in binary search, resort to this option
    if(target !== nums[mid]) {
        let counter = 0;
        for(let i = 0; i < nums.length; i++) {
            if(target > nums[i]) {
                counter++;
            }
        }
        return counter;
    }
};

// Best Case: Time O(log n) using binary search
// Worst Case: O(n) using linear search if target isn't found