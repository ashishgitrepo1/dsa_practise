let longestSubarrayWithTargetSum = function(nums, targetSum)
{
    let n = nums.length;
    let start = 0;
    let end = 0;

    let subArrLength = -1;

    while (end < n)
    {
        let subArr = [];
        for (let i=start; i<=end; i++)
        {
            subArr.push(nums[i]);
        }
        console.log("sub array = ",subArr);
        let total = 0;
        for (let num of subArr)
        {
            total = total + num;
            
        }
        if (total == targetSum)
        {
            subArrLength = Math.max(subArrLength, subArr.length);
            start++;
            end++;
        }
        else if (total < targetSum)
        {
            end++;
        }
        else if (total > targetSum)
        {
            start++;
        }

    }
    return subArrLength;
}

let nums = [1, 5, 2, 4, 9, 2];
let targetSum = 11;

let result = longestSubarrayWithTargetSum(nums, targetSum);
console.log(result);