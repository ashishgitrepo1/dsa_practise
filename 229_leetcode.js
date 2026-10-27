/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let majorityMap = new Map();
    let freq = Math.floor(nums.length/3);
    let ans = [];

    for (let num of nums)
    {
        if (! majorityMap.has(num))
        {
            majorityMap.set(num, 1);
        }
        else
        {
            majorityMap.set(num, majorityMap.get(num)+1);
        }
    }
    //console.log(majorityMap);
    for (let [key, value] of majorityMap)
    {
        if (value > freq)
        {
            ans.push(key);
        }
    }
    return ans;
};

let nums = [1,2];
let output = majorityElement(nums);
console.log(output);