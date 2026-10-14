/**
 * @param {number[]} nums
 * @param {number} target
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
var threeSumClosest = function(nums, target) {
    Quicksort(nums, 0, nums.length-1);
    console.log(nums);
    let n = nums.length;
    let closestSum = nums[0]+nums[1]+nums[2];
    let closestDiff = nums[0]+nums[1]+nums[2] - target;

    // closestSum = Math.min(closestSum, initialSum-target);
    for (let i=1; i<=n-3; i++)
    {
        let newClosestSum = nums[i]+nums[i+1]+nums[i+2];
        let newClosestDiff = nums[i]+nums[i+1]+nums[i+2]-target;
        if (Math.abs(newClosestDiff) < Math.abs(closestDiff) )
        {
            closestSum = newClosestSum;

        }
    }
    return closestSum;
};

let nums = [0,0,0];
let target = 1;

let output = threeSumClosest(nums, target);
console.log(output);