var largestSumAfterKNegations = function(nums, k) {
    let maxSum = 0;
    nums.sort((a,b) => a-b);
    console.log(nums);
    for (let i=0; i<k; i++)
    {
        if (nums[i] == 0)
        {
            break;
        }
        else
        {
            nums[i] = -nums[i];
        }
    }
    for (let num of nums)
    {
        maxSum += num;
    }
    return maxSum;

};
let nums = [2,-3,-1,5,-4];
let k = 2;
let output = largestSumAfterKNegations(nums, k);
console.log(output);
