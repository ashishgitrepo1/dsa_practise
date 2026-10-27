/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    let n = nums.length;
    let countMap = new Map();
    let special = 0;
    for (let i=0; i<n; i++)
    {
        if (! countMap.has(nums[i]))
        {
            countMap.set(nums[i], [i]);
        }
        else
        {
            countMap.set(nums[i], [...countMap.get(nums[i]),i]);
        }
    }
    console.log(countMap);
    for (let [key, val] of countMap)
    {
        let bool = true;
        let arr = val;
        let n = arr.length;
        for (let i=0; i<n-1; i++)
        {
            if (arr[i+1]-arr[i] != 1)
            {
                bool = false;
                break;
            }
        }
        if (bool == true)
        {
            special += 1;
        }
    }
    return special;
};

let nums = [3,3,1,2,2,1];
let output = countSpecialIntegers(nums);
console.log(output);