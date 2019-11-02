// https://leetcode.com/problems/two-sum-less-than-k/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function (A, K) {
    A.sort(function (a, b) {
        return a - b;
    });
    console.log(A);
    let i = 0;
    let max = -1
    let j = A.length - 1;
    while (i < j) {
        let sum = A[i] + A[j];
        if (sum < K) {
            max = Math.max(sum, max);
            i++;
        } else {
            j--;
        }
    }
    return max;

};