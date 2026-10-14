/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
    nums.sort((a,b)=>a-b);
    // console.log(nums);
    let n = nums.length;
    let remainder = n-k;


    let rightAvg = 0;
    for (let i=n-1; i>remainder; i--)
    {
        rightAvg += nums[i];
    }
    // console.log(rightAvg);

    let leftAvg = 0;
    let leftCount = 0;

    for (let i=0; i<=remainder; i++)
    {
        leftAvg += nums[i];
        leftCount += 1;
    }
    return Number((leftAvg/leftCount + rightAvg).toFixed(5));


};
let nums = [9,1,2,3,9];
let k = 3;
let output = largestSumOfAverages(nums, k);
console.log(output);