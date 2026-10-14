/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//subarray but sliding window does not work.
//sliding window only works if all elements are positive

var subarraySum = function(nums, k) {
    let prefixSum = {};
    prefixSum[0] = 1;
    // console.log(prefixSum);
    let currentTotal = 0;
    let result = 0;
    let n = nums.length;

    for (let i=0; i<n; i++)
    {
        currentTotal += nums[i];

        let complement = currentTotal - k;

        // console.log(currentTotal, complement);

        if (complement in prefixSum)
        {
            result += prefixSum[complement];
            // prefixSum[complement] = prefixSum[complement] + 1;
        }
        if (currentTotal in prefixSum)
        {
            prefixSum[currentTotal] = prefixSum[currentTotal] + 1;
        }
        else
        {
            prefixSum[currentTotal] = 1;
        }
       
    }
    console.log(prefixSum);
    return result;
};

let nums = [1, 1, 1];
let k = 2;

let output = subarraySum(nums, k);
console.log(output);