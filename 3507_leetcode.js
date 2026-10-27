/**
 * @param {number[]} nums
 * @return {number}
 */
let checkIncreasingOrder = function(nums)
{
    let n = nums.length;
    for (let i=0; i<n-1; i++)
    {
        if (nums[i]>nums[i+1])
        {
            return false;
        }
    }
    return true;
}
var minimumPairRemoval = function(nums) {
    // console.log(checkIncreasingOrder(nums));
    let operations = 0;
    while (! checkIncreasingOrder(nums))
    {
        console.log(nums);
        operations += 1;
        let minMap = new Map();
        let minSum = Infinity;
        let n = nums.length;
        for (let i=0; i<n-1; i++)
        {
            let a = i;
            let b = i+1;

            let numsTotal = nums[a]+nums[b];
            minSum = Math.min(numsTotal, minSum);
           

            let key = a+','+b;

            minMap.set(key, numsTotal);
            
        }
        console.log("min sum = ",minSum);
        let index1;
        let index2;
        console.log(minMap);
        for (let [key,val] of minMap)
        {
            if (val == minSum)
            {
                index1 = key.split(",")[0];
                index2 = key.split(",")[1];
                // console.log(index1, index2);
                break;
            }
        }
        nums.splice(index1,2,minSum);
        console.log(nums);
        // console.log(minMap);
    }
    // return nums;
    return operations;
};

let nums = [2,2,-1,3,-2,2,1,1,1,0,-1];
let output = minimumPairRemoval(nums);
console.log(output);