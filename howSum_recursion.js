let howSum_recursion = function(targetSum,nums)
{
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
        let remainderResult = howSum_recursion(targetSum-num,nums);
        if (remainderResult != null)
        {
            return [...remainderResult,num];
        }
    }
    return null;
}
let targetSum = 7;
let nums = [5, 3, 4, 7];
let result = howSum_recursion(targetSum,nums);
console.log(result);