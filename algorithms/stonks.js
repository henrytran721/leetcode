// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.


var maxProfit = function(prices) {
    let max = 0;
    let min = Infinity;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        
        max = Math.max(max, prices[i] - min);
    }
    
    return max;
};