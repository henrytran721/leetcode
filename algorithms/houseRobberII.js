// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. 
// All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, 
// adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// explore sum of nums[0] + [i + 2] ... nums[nums.length - 2] or nums[1] + [i + 2] ... nums[nums.length - 1]
// [1,2,3,1] --> [1 + 3] or [2 + 1]

var rob = function(nums) {
    if(nums.length === 1) return nums[0];

    function helper(start, end) {
        let dp = new Array(nums.length).fill(0);
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);
        for(let i = 2; i <= end; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[end];
    }
    return Math.max(helper(0, nums.length - 2), helper(1, nums.length - 1))
}

console.log(rob([0,1,2,3,4,5]));