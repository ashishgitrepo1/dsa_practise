/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let prefixSum = {};
    prefixSum[0] = -1;
    let currentSum = 0;

    let n = nums.length;
    for (let i=0; i<n; i++)
    {
        currentSum += nums[i];
        let currentRemainder = currentSum%k;
        if (currentRemainder in prefixSum)
        {
            if (i-prefixSum[currentRemainder] > 1)
            {
                return true;
            }
        }
        else
        {
            prefixSum[currentRemainder] = i;
        }
    }
    return false;
};

let nums = [23,2,6,4,7];
let k = 13;

let output = checkSubarraySum(nums, k);
console.log(output);