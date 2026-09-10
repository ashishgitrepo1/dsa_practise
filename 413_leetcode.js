let isEqualDiff = function(arr)
{
    if (arr.length <= 2)
    {
        return true;
    }
    let diff = arr[1] - arr[0];
    for (let i=2; i<arr.length; i++)
    {
        if (arr[i]-arr[i-1] != diff)
        {
            return false;
        }
    }
    return true;
}
let numberOfArithmeticSlices  = function(nums)
{
    let countSlices = 0;
    let n = nums.length;
   

    
    for (let i=3; i<=n; i++)
    {
        let arr = [];
        for (let j=0; j<i; j++)
        {
            arr.push(nums[j]);
        }
        if (isEqualDiff(arr))
        {
            console.log(arr);
            countSlices += 1;
        }
        for (let j=0; j<n-i; j++)
        {
            arr.shift();
            arr.push(nums[j+i]);

            if (isEqualDiff(arr))
            {
                countSlices += 1;
            }
        }
    }
    return countSlices;
}

let nums = [1,2,3,8,9,10];
let output = numberOfArithmeticSlices(nums);
console.log(output);