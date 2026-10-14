/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let n = nums.length;
    let leftTotal = 0;
    let rightTotal = 0;

    for (let i=0; i<n; i++)
    {
        rightTotal += nums[i];
    }
    for (let i=0; i<n; i++)
    {
        rightTotal -= nums[i];
        if (leftTotal == rightTotal)
        {
            return i;
        }
        else
        {
            leftTotal += nums[i];
        }
    }
    return -1;
};

let nums = [2,5];
let output = findMiddleIndex(nums);
console.log(output);