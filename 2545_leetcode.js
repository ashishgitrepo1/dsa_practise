/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
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
        while (nums[leftPtr] > pivot)
        {
            leftPtr += 1;
        }
        while (nums[rightPtr] <= pivot)
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
var sortTheStudents = function(score, k) {
    let dict = {};
    for (let arr of score)
    {

        // console.log(arr);
        // console.log(arr[2]);
        dict[arr[k]] = arr;
    }
    // console.log(dict);
    let nums = [];
    for (let key in dict)
    {
        nums.push(Number(key));
    }
    // console.log(nums);
    Quicksort(nums, 0, nums.length-1);
    // console.log(nums);

    let output = [];
    for (let num of nums)
    {
        output.push(dict[num]);
    }
    return output;
    
};

let score = [[3,4],[5,6]];
let k = 0;

let output = sortTheStudents(score, k);
// console.log(output);
for (let arr of output)
{
    console.log(arr);
}

