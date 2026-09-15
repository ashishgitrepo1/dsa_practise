/**
 * @param {number[][]} grid
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
var deleteGreatestValue = function(grid) {
    let rows = grid.length;
    let maxSum = 0;
    for (let i=0; i<rows; i++)
    {
        Quicksort(grid[i], 0, grid[i].length-1);

    }
    // console.log(grid);
    // for (let item of grid)
    // {
    //     console.log(item);
    // }

    let cols = grid[0].length;
    for (let col=0; col<cols; col++)
    {
        let maxElement = -Infinity;
        for (let row=0; row<rows; row++)
        {
            maxElement = Math.max(maxElement, grid[row][col]);
        }
        maxSum += maxElement;
    }
    return maxSum;
};

let grid = [[10]];
let output = deleteGreatestValue(grid);
console.log(output);