let bestSum_recursion = function(targetSum, nums)
{
    // console.log(targetSum,nums);
    if (targetSum == 0)
    {
        return [];
    }
    if (targetSum < 0)
    {
        return null;
    }

    let bestCombination = null;
    for (let num of nums)
    {
        let remainingSum = bestSum_recursion(targetSum-num, nums);
        if (remainingSum != null)
        {
            let remainingCombination = [...remainingSum,num];
            if (bestCombination==null || remainingCombination.length<bestCombination.length)
            {
                console.log(remainingCombination);
                bestCombination = remainingCombination;
                // return bestCombination;
            }
        }
    }
    return bestCombination;
}

let targetSum = 7;
let nums = [5, 3, 4, 7];
let result = bestSum_recursion(targetSum,nums);
console.log(result);