let QuickSort = function(nums, left, right)
{
    if (right-left <=0 )
    {
        return;
    }
    else
    {
        
    }
}
var largestSumAfterKNegations = function(nums, k) {
    let maxSum = 0;
    // nums.sort((a,b) => a-b);
    QuickSort(nums,0, nums.length-1);
    console.log(nums);
    
    let n = nums.length;
    

    while (k > 0)
    {
        nums[0] = -nums[0];
        // nums.sort((a,b) => a-b);
        QuickSort(nums, 0, nums.length-1);
        k -= 1;
    }
    for (let num of nums)
    {
        maxSum += num; 
    }
    return maxSum;

};
let nums = [2,-3,-1,5,-4];
let k = 2;
let output = largestSumAfterKNegations(nums, k);
console.log(output);
