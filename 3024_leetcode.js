/**
 * @param {number[]} nums
 * @return {string}
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

    while(true)
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
        let partition  = getPartition(nums, left, right, pivot);
        Quicksort(nums, left, partition-1);
        Quicksort(nums, partition+1, right);
    }
}
var triangleType = function(nums) {
    Quicksort(nums, 0, nums.length-1);
    console.log(nums);
    if ((nums[0]+nums[1]) > nums[2])
    {
        if ((nums[0]!=nums[1]) && (nums[1]!=nums[2]) && (nums[0]!=nums[2]))
        {
            return "scalene";
        }
        else if ((nums[0]==nums[1]) && (nums[1]==nums[2]) && (nums[0]==nums[2]))
        {
            return 'equilateral';
        }
        else if ((nums[0]==nums[1]) && (nums[1]!=nums[2]))
        {
            return 'isosceles';
        }
        else if ((nums[0]!=nums[1])  && (nums[1]==nums[2]))
        {
            return 'isosceles';
        }

    }
    else
    {
        return "none";
    }
};

let nums = [9,4,9];
let output = triangleType(nums);

console.log(output);