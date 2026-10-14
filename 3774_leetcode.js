/**
 * @param {number[]} nums
 * @param {number} k
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
var absDifference = function(nums, k) {
    Quicksort(nums, 0, nums.length-1);
    console.log(nums);
    let largeK = nums.slice(-k);
    let smallK = nums.slice(0,k);

    let largeSum = 0;
    let smallSum = 0;

    for (let num of largeK)
    {
        largeSum += num;
    }
    for (let num of smallK)
    {
        smallSum += num;
    }
    return largeSum-smallSum;

    // console.log(largeK, smallK);
    
};

let nums = [100];
let k = 1;

let output = absDifference(nums, k);
console.log(output);