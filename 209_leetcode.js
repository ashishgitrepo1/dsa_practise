let minSubArrayLen = function(nums, target)
{
    let start = 0;
    let end = 0;
    let n = nums.length;
    let minLength = Infinity;
    let currentSum = 0;

    for (end=0; end<n; end++)
    {
        currentSum += nums[end];
        
        while (currentSum >= target)
        {
            let currentLength = end - start + 1;
            if (currentLength < minLength)
            {
                minLength = currentLength;
            }
            currentSum -= nums[start];
            start += 1;
        }
    }
    if (minLength == Infinity)
    {
        return 0;
    }
    return minLength;

}

let target = 11;
let nums = [1,2,3,4,5];

let output = minSubArrayLen(nums, target);
console.log(output);