/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    //prefix sum logic
    let n = nums.length;
    let prefixSum = Array(n).fill(0);
    for (let i=1; i<=n; i++)
    {
        prefixSum[i] = prefixSum[i-1]+nums[i-1];
    }
    // console.log(prefixSum);
    let total = 0;
    for (let i=0; i<n; i++)
    {
        let start = Math.max(0, i-nums[i]);
        let end = i;

        total += (prefixSum[i+1]-prefixSum[start]);
    }
    return total;
};

let nums = [3,1,1,2];
let output = subarraySum(nums);
console.log(output);