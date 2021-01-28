// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of
// money cannot be made up by any combination of the coins, return -1.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
/**
 * Use Dynamic Programming with an array
 * [0, Infinity * 11]
 * find each index's number of steps to make change
 * [0, 1, 1, 2, 2]
 * 
 * looks back at predefined values to calculate the next value
 * e.g. dp[4] -> Math.min(Infinity, dp[4 - 2] + 1) = 2
 */

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i <= amount; i++) {
        // find number of ways u can make change with current index
        for(let coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount];
};