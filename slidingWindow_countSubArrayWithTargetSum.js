let countSubArrWithTargetSum = function(nums, target, k)
{
    let n = nums.length;
    let currentSum = 0;
    let count = 0;
    for (let i=0; i<k; i++)
    {
        currentSum = currentSum + nums[i];
    }
    if (currentSum == target)
    {
        count++;
    }

    for (let i=0; i<n-k; i++)
    {
        currentSum = currentSum - nums[i];
        currentSum = currentSum + nums[i+k];

        if (currentSum == target)
        {
            count++;
        }
    }
    return count;
}

let nums = [1, 2, 1, 5, 2, 3, 10, 1, 9, 4, 3, 3, 7];
let target = 10;
let k = 3;

let result = countSubArrWithTargetSum(nums, target, k);
console.log(result);