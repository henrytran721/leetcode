/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 */

 // if index value is greater then previous index value, add difference to total

 var maxProfit = function(prices) {
    var total = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            total = total + (prices[i] - prices[i - 1]);
        }
    }
    return total;
};

/**
 * 
 * Big O 
 * Time: O(n) have to loop through the entire array
 * Space: O(1) don't have to allocate any extra memory
 */