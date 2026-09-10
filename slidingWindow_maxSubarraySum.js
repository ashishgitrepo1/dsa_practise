let subArrWithMaxSum = function(nums, k)
{
    let n = nums.length;
    let currentSum = 0;
    for (let i=0; i<k; i++)
    {
        currentSum = currentSum + nums[i];
    }
    let maxSum = currentSum;

    for (let i=0; i<n-k; i++)
    {
        currentSum = currentSum - nums[i];
        currentSum = currentSum + nums[i+k];

        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
let nums = [20, 50, 10, 60, 80, 70]
let k = 1;

let result = subArrWithMaxSum(nums, k);
console.log(result);