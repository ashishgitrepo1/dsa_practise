let longestSubArrWithTargetSum = function(nums, targetSum)
{
    //variable size sliding window hence use two pointers. 
    //using sliding window because the solution involves sub array
    let start = 0;
    let end = 0;

    let n = nums.length;

    let currentSubArray = -1;
    let longestSubArray = currentSubArray;
    let currentSum = 0;

    while (end<n)
    {
        currentSum = currentSum + nums[end];
        

        while(currentSum > targetSum)
        {
            currentSum = currentSum - nums[start];
            start++;
        }
        if (currentSum == targetSum)
        {
            longestSubArray = Math.max(longestSubArray,end-start+1);
           
        }
        end++;
    }
    // console.log(start,end);
    return longestSubArray;
}
let nums = [1, 2, 1, 5, 2, 3, 10, 1, 9, 4, 3, 3, 7];
let targetSum = 10;

let result = longestSubArrWithTargetSum(nums, targetSum);
console.log(result);