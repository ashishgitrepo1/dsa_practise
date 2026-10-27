let SubarrayWithTargetSum = function(nums, target)
{
    let n = nums.length;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    for (right=0; right<n; right++)
    {
        currentSum += nums[right];
        while (currentSum > target)
        {
            currentSum -= nums[left];
            left += 1;
        }
        if (currentSum == target)
        {
            return [left, right];
        }
    }
}
let nums = [3, 1, 4, 9, 2, 1, 7];
let target = 11;
let output = SubarrayWithTargetSum(nums, target);
console.log(output);