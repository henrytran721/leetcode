/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

var maxProfit = function(prices) {
    var currMin = Infinity;
    var currMax = 0;
    
    for(let i = 0; i < prices.length; i++) {
        // find smallest value seen
        if(prices[i] < currMin) {
            currMin = prices[i];
        } else {
            // determine the max between curr # - the min
            currMax = Math.max(currMax, prices[i] - currMin);
        }
    }
    return currMax;
};

/**
 *  min    max
 *   I      0
 *   7      0
 *   1      0
 *   5      4
 *   3      4
 *   6      5
 *   4      5   
 */