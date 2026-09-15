/**
 * @param {number} num
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
        let parition = getPartition(nums, left, right, pivot);
        Quicksort(nums, left, parition-1);
        Quicksort(nums, parition+1, right);
    }
}
var splitNum = function(num) {
    let newNum = String(num).split('').map(Number);
    Quicksort(newNum, 0, newNum.length-1);
    console.log(newNum);

    let num1 = '';
    let num2 = '';

    for (let i=0; i<newNum.length; i=i+2)
    {
        num1 += newNum[i];
    }
    for (let j=1; j<newNum.length; j=j+2)
    {
        num2 += newNum[j];
    }

    return Number(num1)+Number(num2);
};

let num = 999999999;
let output = splitNum(num);
console.log(output);