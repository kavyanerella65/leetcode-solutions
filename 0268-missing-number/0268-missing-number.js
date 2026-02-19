/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let xor = n;

    for(let i=0; i<n; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
};