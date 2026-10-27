let SubArray_Sum_Size_k = function(nums, k)
{
    let currentSum = 0;
    let n = nums.length;
    for (let i=0; i<k; i++)
    {
        currentSum += nums[i];
    }
    let maxSum = currentSum;
    for (let i=0; i<n-k; i++)
    {
        currentSum -= nums[i];
        currentSum += nums[i+k];

        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
    
}
let nums = Array(80000).fill(1);
let k = 5000;
let output = SubArray_Sum_Size_k(nums, k);
console.log(output);