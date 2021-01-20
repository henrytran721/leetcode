/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 */

var searchInsert = function(nums, target) {
    // use binary search approach splitting the array into two and moving pointers
    var start = 0;
    var end = nums.length - 1;
    
    while(start < end) {
        var mid = Math.floor((start + end) / 2);
        if(target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    if(target === nums[mid]) {
        return mid;
    } else {
        var count = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < target) {
                count++;
            }
        }
        return count;
    }
};

/** Big O
 * Best Case: O(logn) because we're using binary search and cutting the array in half every time to find target
 * Worst Case: O(n) if we don't find our value
 * 
 * Space: O(1)
 */