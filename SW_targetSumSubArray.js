let targetSumSubArray = function(nums, target, k)
{
    let n = nums.length;
    let count = 0;
    let total = 0;

    for (let i=0; i<k; i++)
    {
        total = total + nums[i];
    }
    if (total == target)
    {
        count++;
        //total = 0;
    }

    for (let i=0; i<n-k; i++)
    {
        total = total - nums[i];
        total = total + nums[i+k];

        if (total == target)
        {
            count++;
            //total = 0;
        }
    }

    return count;
}
let nums = [1, 2, 1, 5, 2, 3, 10, 1, 9, 4, 3, 3, 7];
let target = 7;
let k = 3;

let output = targetSumSubArray(nums,target, k);
console.log(output);