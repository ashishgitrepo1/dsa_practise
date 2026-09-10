let bestSum_memo = function(targetSum,nums,memo={})
{
    console.log(targetSum,nums,memo);
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
    let shortestCombination = null;

    for (let num of nums)
    {
        let remainingCombination = bestSum_memo(targetSum-num, nums, memo);
        if (remainingCombination != null)
        {
            currentCombination = [...remainingCombination,num];
            
            if (shortestCombination==null || currentCombination.length<shortestCombination.length)
            {
                console.log(currentCombination);
                shortestCombination = currentCombination;
                // memo[targetSum] = shortestCombination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}


let targetSum = 7;
let nums = [5,3,4,7];
let result = bestSum_memo(targetSum,nums);
console.log(result);