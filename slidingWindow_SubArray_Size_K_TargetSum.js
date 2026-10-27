let SubArray_Size_K_TargetSum = function(nums, target, k)
{
    let n = nums.length;
    let countTarget = 0;

    let currentSum = 0;
    for (let i=0; i<k; i++)
    {
        currentSum += nums[i];
    }
    if (currentSum == target)
    {
        countTarget += 1;
    }
    for (let i=0; i<n-k; i++)
    {
        currentSum -= nums[i];
        currentSum += nums[i+k];

        if (currentSum == target)
        {
            countTarget += 1;
        }
    }
    return countTarget;
}
let nums = Array(50000).fill(0);
let target = 1;
let k = 5000;

let output = SubArray_Size_K_TargetSum(nums, target, k);
console.log(output);