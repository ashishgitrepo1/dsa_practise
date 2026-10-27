let SubarrayLargestWithTargetSum = function(nums, targetSum)
{
    let n = nums.length;
    let left = 0;
    let right = 0;

    let currentSum = 0;
    let maxArraySize = -Infinity;
    for (right=0; right<n; right++)
    {
        currentSum += nums[right];
        while (currentSum > targetSum)
        {
            currentSum -= nums[left];
            left += 1;
        }
        if (currentSum == targetSum)
        {
            let currentSizeArray = right-left+1;
            maxArraySize = Math.max(maxArraySize,currentSizeArray);
        }
    }
    if (maxArraySize == -Infinity)
    {
        return -1;
    }
    return maxArraySize;
}
let nums = [2, 4, 1, 1, 2];
let targetSum = 10;
let output = SubarrayLargestWithTargetSum(nums, targetSum);
console.log(output);