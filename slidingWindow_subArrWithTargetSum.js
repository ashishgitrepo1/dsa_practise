let subArrWithTargetSum = function(nums, targetSum)
{
    let start = 0;
    let end;

    let n = nums.length;

    let currentSum = 0;

    for (end=0; end<n; end++ )
    {
        currentSum = currentSum + nums[end];
        if (currentSum == targetSum)
        {
            return [start,end];
        }

        while (currentSum > targetSum)
        {
            currentSum = currentSum - nums[start];
            ++start;
        } 

       
        
    }
    return -1;
}
let nums = [3, 1, 4, 9, 2, 1, 7];
let targetSum = 10;

let result = subArrWithTargetSum(nums, targetSum);
console.log(result);