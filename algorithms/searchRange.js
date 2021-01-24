/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 */

var searchRange = function(nums, target) {
    let left = findStartingIndex(nums, target);
    let right = findEndingIndex(nums, target);
    return [left, right];
};

// search from beginning, if target is found break out of loop and return the index
function findStartingIndex(nums, target) {
    let index = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            index = i;
            break;
        }
    }
    return index;
}

// search from the end, if target is found break out of the loop and return the index
function findEndingIndex(nums, target) {
    let index = -1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === target) {
            index = i;
            break;
        }
    }
    return index;
}
