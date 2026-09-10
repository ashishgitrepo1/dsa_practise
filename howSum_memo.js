let howSum_memo = function(targetSum,nums, memo={})
{
    // console.log(targetSum,memo);
    
    if (targetSum in memo)
    {
        return memo[targetSum];
    }
    if (targetSum == 0)
    {
        return [];
    }
    if (targetSum < 0)
    {
        return null;
    }
    for (let num of nums)
    {
        let remainderResult = howSum_memo(targetSum-num, nums,memo);
        if (remainderResult != null)
        {
            memo[targetSum] = [...remainderResult,num];
            // console.log(targetSum,memo);
            // return memo[targetSum];
            return [...remainderResult,num];
        }
    }
    memo[targetSum] = null;
    return null;
}

let targetSum = 8000;
let nums = [7, 14];
let result = howSum_memo(targetSum,nums);
console.log(result);