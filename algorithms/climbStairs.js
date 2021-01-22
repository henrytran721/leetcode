/**
 * 
 * You are climbing a staircase. It takes n steps to reach the top. 
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

    n = 1, 2, 3, 4
    output = 1, 2, 3, 5
    Takes the last two numbers and computes the next output 

    Use memoization to cache previous results
    [ <2 empty items>, 2, 3, 5, 8 ]
 */

var climbStairs = function(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 1) return 1;
    var res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    memo[n] = res;
    return res;
};