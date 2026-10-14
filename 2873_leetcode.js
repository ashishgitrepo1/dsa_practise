/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let n = nums.length;
    let maxValue = -Infinity;
    for (let i=1; i<n-1; i++)
    {
        let leftMax = Math.max(...nums.slice(0,i));
        let rightMax = Math.max(...nums.slice(i+1));
        // console.log(leftMax, rightMax, nums[i]);
        maxValue = Math.max(maxValue, (leftMax-nums[i])*rightMax);
    }
    if (maxValue < 0)
    {
        return 0;
    }
    return maxValue;
};
let nums = [1,2,3];
let output = maximumTripletValue(nums);
console.log(output);