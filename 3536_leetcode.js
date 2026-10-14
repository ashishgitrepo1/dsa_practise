/**
 * @param {number} n
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
var maxProduct = function(n) {
  let nNums = String(n).split('').map(Number);
//   console.log(nNums);
  Quicksort(nNums, 0, nNums.length-1);
  return nNums[nNums.length-1]*nNums[nNums.length-2];  
};

let n = 10;
let output = maxProduct(n);
console.log(output);
// console.log(module);