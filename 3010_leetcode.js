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
var minimumCost = function(nums) {
    let newNums = nums.slice(1);
    Quicksort(newNums, 0, newNums.length-1);
    // console.log(newNums);
    return nums[0]+newNums[0]+newNums[1];

};

let nums = [1,2,3,12];
let output = minimumCost(nums);
console.log(output);