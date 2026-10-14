/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    //prefix sum logic
    let n = nums.length;
    let leftArr = Array(n).fill(0);
    let rightArr = Array(n).fill(0);

    for (let i=1; i<n; i++)
    {
        leftArr[i] = leftArr[i-1]+nums[i-1];
    }
    // console.log(leftArr);
    for (let i=n-2; i>=0; i--)
    {
        rightArr[i] = rightArr[i+1]+nums[i+1];
    }
    // console.log(rightArr);
    let outputDiff = [];

    for (let i=0; i<n; i++)
    {
        outputDiff.push(Math.abs(leftArr[i]-rightArr[i]));
    }
    return outputDiff;
};

let nums = [10,4,8,3];
let output = leftRightDifference(nums);
console.log(output);