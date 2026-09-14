let Swap = function(nums, left, right)
{
    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
}
let getPartition = function(nums, left, right, pivot)
{
    let leftPtr = left;
    let rightPtr = right - 1;

    while (true)
    {
        while (nums[leftPtr] < pivot)
        {
            leftPtr += 1;
        }
        while (nums[rightPtr] >= pivot)
        {
            rightPtr -= 1;
        }
        if (leftPtr > rightPtr)
        {
            break;
        }
        else
        {
            Swap(nums, leftPtr, rightPtr);
        }
    }
    Swap(nums, leftPtr, right);
    return leftPtr;
}
let QuickSort = function(nums, left, right)
{
    if (right-left <=0 )
    {
        return;
    }
    else
    {
        let pivot = nums[right];
        let partition = getPartition(nums, left, right, pivot);
        QuickSort(nums, left, partition-1);
        QuickSort(nums, partition+1, right);
    }
}
var largestSumAfterKNegations = function(nums, k) {
    let maxSum = 0;
    // nums.sort((a,b) => a-b);
    QuickSort(nums,0, nums.length-1);
    
    // console.log(nums);
    
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
