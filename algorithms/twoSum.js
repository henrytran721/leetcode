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