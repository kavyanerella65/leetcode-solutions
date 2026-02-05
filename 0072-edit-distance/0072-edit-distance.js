/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1.length < word2.length) {
        [word1, word2] = [word2, word1];
    }

    let m = word1.length;
    let n = word2.length;

    let dp = new Array(n+1).fill(0);

    for (let j=0; j <= n; j++) {
        dp[j] = j;
    }

    for (let i=1; i <=m; i++) {
        let prev = dp[0];
        dp[0] = i;

        for(let j=1; j <=n; j++) {
            let temp = dp[j];

            if(word1[i-1] === word2[j-1]) {
                dp[j] = prev;
            } else {
                dp[j] = 1 + Math.min(dp[j], dp[j-1], prev);
            }
            prev = temp;
        }
    }
    return dp[n];
};