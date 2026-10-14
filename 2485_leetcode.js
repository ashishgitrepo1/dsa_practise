/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let nums = [];
    for (let i=1; i<=n; i++)
    {
        nums.push(i);
    }
    let prefixSum = Array(n).fill(0);
    for (let i=1; i<=n; i++)
    {
        prefixSum[i] = prefixSum[i-1]+nums[i-1];
    }
    // console.log(prefixSum);
    let totalSum = 0;
    for (let num of nums)
    {
        totalSum += num;
    }
    // console.log(totalSum);
    for (let i=1; i<=n; i++)
    {
        if (prefixSum[i] == totalSum-prefixSum[i-1])
        {
            return nums[i-1];
        }
    }
    return -1;
};

let n = 4;
let output = pivotInteger(n);
console.log(output);