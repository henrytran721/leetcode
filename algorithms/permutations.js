// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * This is a backtracking problem in which we use recursion to go back and fill in possible values
 * Time Complexity: O(n!) because permutations will result in n! combinations
 * Space Complexity: O(n)
 */

var permute = function(nums) {
    let result = [];
    if(nums == null || !nums.length) return result;
    
    function permutate(arr = [], visited = {}) {
        // base case: if we find a combination === nums.length, push to result
        if(arr.length === nums.length) {
            console.log(arr, visited);
            // makes a deep copy and push to result
            return result.push(arr.slice());
        }
        
        for(let num of nums) {
            if(!visited[num]) {
                // marks current index as true and pushes to arr
                visited[num] = true;
                arr.push(num);
                // recurses the array and creates other permutations based on current index
                // if arr[i] = 1, permutate([1], {1: true}), permutate([1,2], {1: true, 2: true}), permutate([1,2,3]...)
                permutate(arr, visited);
                arr.pop();
                visited[num] = false;
            }
        }
    }
    
    permutate();
    return result;
};