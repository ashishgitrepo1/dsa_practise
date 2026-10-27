/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let countArray = 0;
    let n = nums.length;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    for (right=0; right<n; right++)
    {
        currentSum += nums[right];
        while (currentSum > goal)
        {
            currentSum -= nums[left];
            left += 1;

             if (currentSum == goal)
                {
                    
                    countArray += 1;
                }
        }
        if (currentSum == goal)
        {
            console.log(left, right);
            countArray += 1;
        }
    }
    return countArray;
};

let nums = [0,0,0,0,0];
let goal = 0;

let output = numSubarraysWithSum(nums, goal);
console.log(output);