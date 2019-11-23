/**
 * https://leetcode.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let value = [];
    let index = [];
    let result = Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (value.length && value[value.length - 1] < nums[i]) {
            value.pop();
            result[index.pop()] = nums[i]

        }
        value.push(nums[i]);
        index.push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        while (value.length && value[value.length - 1] < nums[i]) {
            value.pop();
            result[index.pop()] = nums[i]
        }
    }

    return result;




};