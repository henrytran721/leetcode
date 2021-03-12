/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it
 * will automatically contact the police if two adjacent houses were broken into on the same night.
 * 
 * Example: nums = [1,2,3,1]
 * Output: 4 (House 1: 1 + House 3: 3 = 4)
 * 
 * Use a hash map and store previously seen sums, 
 * we want to compare currVal + map[i + 2] and map[i + 1]
 * In theory, currVal + map[i + 1] checks even indices,
 * while map[i + 1] checks odd indices
 * 
 *  map: {0:4, 1:3, 2:3, 3: 1, 4: 0}
 */

// going backwards
 var rob = function(nums) {
     let map = {};
     map[nums.length] = 0;
     map[nums.length - 1] = nums[nums.length - 1];

     for(let i = nums.length - 2; i >= 0; i--) {
         map[i] = Math.max(map[i + 1], nums[i] + map[i + 2]);
     }
 }

 /**
  * Time Complexity: O(n)
  * Space Complexity: O(n)
  */

 // House Robber moving forward