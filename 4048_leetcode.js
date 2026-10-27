/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    let countMap = new Map();
    let n = nums.length;
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
        //let bool = true;
        if (val.length == 3)
        {
            let [a, b, c] = val;
            if (b-a == c-b)
            {
                special += 1;
            }
        }
    }
    return special;
};

let nums = [8,6,6,8,8];
let output = countSpecialIntegers(nums);
console.log(output);