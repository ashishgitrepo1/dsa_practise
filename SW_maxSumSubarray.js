let maxSumSubarray = function(nums,k)
{
    let n = nums.length;
    let maxSum = 0;
    for (let i=0; i<k; i++)
    {
        maxSum = maxSum + nums[i];
    }
    let currentSum = maxSum;

    for (let i=0; i<n-k; i++)
    {
        currentSum = currentSum - nums[i];
        currentSum = currentSum + nums[i+k];

        if (currentSum > maxSum)
        {
            maxSum = currentSum;
        }
    }
    return maxSum;

}
let nums = [20, 50, 10, 60, 80, 70];
let k = 1;

let output = maxSumSubarray(nums,k);
console.log(output);