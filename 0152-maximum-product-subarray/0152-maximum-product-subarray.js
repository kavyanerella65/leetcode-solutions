/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];

    for(let i=1; i < nums.length; i++) {
        let current = nums[i];

        if(current < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }

        maxSoFar = Math.max(current, maxSoFar * current);
        minSoFar = Math.min(current, minSoFar * current);
        result = Math.max(result, maxSoFar);
    }
    return result;
};