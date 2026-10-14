/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    //check the number of times sum of num in nums is 0
    let currentSum = 0;
    let total = 0;
    for (let num of nums)
    {
        currentSum += num;
        if (currentSum == 0)
        {
            total += 1;
        }
    }
    return total;
};