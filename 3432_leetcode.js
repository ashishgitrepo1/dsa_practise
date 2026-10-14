/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    //prefix sum logic to calculate leftsum and rightsum
    let totalSum = 0;
    for (let num of nums)
    {
        totalSum += num;
    }
    let n = nums.length;
    let prefixSum = Array(n).fill(0);
    for (let i=1; i<n; i++)
    {
        prefixSum[i] = prefixSum[i-1]+nums[i-1];
    }
    // console.log(prefixSum);
    let partition = 0;
    for (let i=1; i<n; i++)
    {
        let leftSum = prefixSum[i-1]+nums[i-1];
        let rightSum = totalSum - leftSum;
        // console.log(leftSum, rightSum, leftSum-rightSum);

        if (Math.abs(leftSum-rightSum)%2 == 0)
        {
            partition += 1;
        }
    }
    return partition;

};

let nums = [2,4,6,8];
let output = countPartitions(nums);
console.log(output);