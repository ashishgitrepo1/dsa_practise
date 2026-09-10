let canSum_memo = function(targetSum,nums,memo={})
{
    console.log(targetSum,memo);
    if (targetSum in memo)
    {
        return memo[targetSum];
    }
    if (targetSum == 0)
    {
        return true;
    }
    if (targetSum < 0)
    {
        return false;
    }
    for (let num of nums)
    {
        if (canSum_memo(targetSum-num,nums,memo) == true)
        {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

// let targetSum = 300;
// let nums = [7,14];

let targetSum = 7;
let nums = [5, 3, 4, 7];
let result = canSum_memo(targetSum,nums);
console.log(result);