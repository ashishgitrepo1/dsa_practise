let canSum_recursion = function(targetSum, nums)
{
    console.log(targetSum,nums);
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
        if (canSum_recursion(targetSum-num, nums) == true)
        {
            return true;
        }
    }
    return false;
}

let targetSum = 7;
let nums = [5,3,4,7];
let result = canSum_recursion(targetSum,nums);
console.log(result);