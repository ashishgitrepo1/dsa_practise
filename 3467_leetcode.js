/**
 * @param {number[]} nums
 * @return {number[]}
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
        if (leftPtr < rightPtr)
        {
            Swap(nums, leftPtr, rightPtr);
        }
        else
        {
            break;
        }
    }
    Swap(nums, leftPtr, right);
    return leftPtr;
}
let QuickSort = function(nums, left, right)
{
    if (right-left <= 0)
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
var transformArray = function(nums) {
    let n = nums.length;
    for (let i=0; i<n; i++)
    {
        if (nums[i]%2 == 0)
        {
            nums[i] = 0;
        }
        else
        {
            nums[i] = 1;
        }
    }
    // console.log(nums);
    QuickSort(nums, 0, nums.length-1);
    return nums;
};

let nums = [1,5,1,4,2];
let output = transformArray(nums);
console.log(output);