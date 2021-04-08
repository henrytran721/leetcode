var findMin = function(nums) {
    if(nums.length === 1) return nums[0];
    let start = 0;
    let end = nums.length - 1;
    
    if(nums[start] < nums[end]) {
        return nums[start];
    }
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        console.log(nums[mid], nums[start], nums[end]);
        
        // if number to the right of mid is less than mid, found inflection point
        if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
        // if number to the left of mid is greater than mid, mid is the lowest value
        if(nums[mid] < nums[mid - 1]) return nums[mid];
        
        if(nums[mid] > nums[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

// if (nums[start] < nums[end]) we know that there was no rotation so return the first element
// else run binary search to find place of rotation