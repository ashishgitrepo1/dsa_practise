
let minOperations = function(nums)
{
    let n = nums.length;
    let totalSum = 0;
    let numOperations = 0;
    let k = 3;
    for (let i=0; i<=n-k; i++)
    {
        if (nums[i] == 0)
        {
            numOperations += 1;
            nums[i] = 1;

            if (nums[i+1] == 0)
            {
                nums[i+1] = 1;
            }
            else if (nums[i+1] == 1)
            {
                nums[i+1] = 0;
            }
            if (nums[i+2] == 0)
            {
                nums[i+2] = 1;
            }
            else if (nums[i+2] == 1)
            {
                nums[i+2] = 0;
            }
        }
        // console.log(nums);
    }
    for (let num of nums)
    {
        totalSum += num;
    }
    if (totalSum == n)
    {
        return numOperations;
    }
    else
    {
        return -1;
    }

    
    
    // return numOperations;
    
    
}
let nums = [0,1,1,1];
let output = minOperations(nums);
console.log(output);