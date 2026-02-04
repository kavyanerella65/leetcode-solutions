/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let left=0;
    let maxLen=0;

    for(let right=0; right<s.length; right++) {
        let char = s[right];
        if(map.has(char) && map.get(char) >= left) {
            left = map.get(char)+1;
        }
        map.set(char, right);
        maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
};