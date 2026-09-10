
let arrayStepper = function(nums, i, memo={})
{
    if (i in memo)
    {
        return memo[i];
    }
    if (i==nums.length-1)
    {
        return true;
    }
    // if (i < nums.lengh-1)
    // {
    //     return true;
    // }
    let maxStep = nums[i];
    for (let step=1; step<=maxStep; step++)
    {
        if (arrayStepper(nums,i+step)==true)
        {
            memo[i] = true;
            return true;
        }
    }
    memo[i] = false;
    return false;
}
let nums = [31, 30, 29, 28, 1, 1, 1, 1, 1, 0];
let output = arrayStepper(nums,0);
console.log(output);