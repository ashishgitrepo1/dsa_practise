/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;
    let leftMax = Array(n).fill(0);
    let rightMin = Array(n).fill(0);
    let smallestIndex = Infinity;

    let leftMaximum = -Infinity;
    let rightMinimum = Infinity;

    for (let i=0; i<n; i++)
    {
        leftMaximum = Math.max(leftMaximum, nums[i]);
        leftMax[i] = leftMaximum;
    }
    for (let i=n-1; i>=0; i--)
    {
        rightMinimum = Math.min(rightMinimum, nums[i]);
        rightMin[i] = rightMinimum;
    }
    // console.log(leftMax);
    // console.log(rightMin);

    for (let i=0; i<n; i++)
    {
        if (leftMax[i]-rightMin[i] <= k )
        {
            smallestIndex = Math.min(smallestIndex, i);
        }
    }
    if (smallestIndex == Infinity)
    {
        return -1;
    }
    return smallestIndex;
};

let nums = [0];
let k = 0;

let output = firstStableIndex(nums, k);
console.log(output);