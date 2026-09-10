
let countCompleteSubarrays = function(nums)
{
    let numsMap = new Map();
    for (let num of nums)
    {
        if (! numsMap.has(num))
        {
            numsMap.set(num, 1);
        }
        else
        {
            numsMap.set(num, numsMap.get(num)+1);
        }
    }
    let distinctNums = numsMap.size;
    let n = nums.length;
    let countSubArr = 0;
    for (let k=1; k<=n; k++)
    {
        let subNums = new Map();
        for (let i=0; i<k; i++)
        {
            if (! subNums.has(nums[i]))
            {
                subNums.set(nums[i], 1);
            }
            else
            {
                subNums.set(nums[i], subNums.get(nums[i])+1);
            }
        }
        console.log(subNums);
        if (subNums.size == distinctNums)
        {
            countSubArr += 1;
        }

        for (let i=0; i<n-k; i++)
        {
            subNums.set(nums[i], subNums.get(nums[i])-1);
            if (subNums.get(nums[i]) == 0)
            {
                subNums.delete(nums[i]);
            }
            if (! subNums.has(nums[i+k]))
            {
                subNums.set(nums[i+k], 1);
            }
            else
            {
                subNums.set(nums[i+k], subNums.get(nums[i+k])+1);
            }
            console.log(subNums);

            if (subNums.size == distinctNums)
            {
                countSubArr += 1;
            }
        }
    }
    return countSubArr;
}
let nums = [5,5,5,5];
let output = countCompleteSubarrays(nums);
console.log(output);