/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i=0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if(currentPrice < minPrice) {
            minPrice = currentPrice; 
        }
        else {
            const profit = currentPrice - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};