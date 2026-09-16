/**
 * @param {number[]} nums
 * @return {number}
 */
let Swap = function(nums, left, right)
{
    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
}
let getPartition = function(nums, left, right, pivot)
{
    let leftPtr = left;
    let rightPtr = right-1;

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
let Quicksort = function(nums, left, right)
{
    if (right-left <= 0)
    {
        return;
    }
    else
    {
        let pivot = nums[right];
        let partition = getPartition(nums, left, right, pivot);
        Quicksort(nums, left, partition-1);
        Quicksort(nums, partition+1, right);
    }
}
var minimumAverage = function(nums) {
    Quicksort(nums, 0, nums.length-1);
    //console.log(nums);

    let minAverage = Infinity;

    let left = 0;
    let right = nums.length - 1;
    while (left < right)
    {
        minAverage = Math.min(minAverage, (nums[left]+nums[right])/2);
        left += 1;
        right -= 1;
    }
    return minAverage;
    
};

let nums = [1,2,3,7,8,9];
let output = minimumAverage(nums);
console.log(output);
