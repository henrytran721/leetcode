/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 * You may return the answer in any order.
 * Input: n = 4, k = 2
 * Output:
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]
 */

 // we observe that each value to the right is increasing, so we increment our index every iteration

 var combine = function(n, k) {
     // base case
    if(n === 1 && k === 1) return [[1]];
    let result = [];
    
    function combinations(arr, index) {
        // if our curr arr length === k, we have found a combination; recursive base case
        if(arr.length === k) {
            return result.push(arr.slice());
        }
        // start loop at index 1, loop increments once current index combinations finish
        for(let i = index; i <= n; i++) {
                arr.push(i);
                // make recursive call passing in our current index and running loop until n
                // when index = n + 1 we have [currentIndex], for loop is no longer true so we just pop off and move on to the next index
                combinations(arr, i + 1);
                arr.pop();
            }
    }
    
    combinations([], 1);
    return result;
};

// Time Complexity: O(n) because we loop through every iteration from 1...n
// Space Complexity: O(n) because we are using the call stack to allocation our function calls