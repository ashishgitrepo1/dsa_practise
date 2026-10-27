/**
 * @param {number[]} nums
 * @return {number[]}
 */

let SumDict = function(dict)
{
    let sumValues = 0;
    for (let key in dict)
    {
        sumValues += dict[key];
    }
    return sumValues;
}
var rearrangeArray = function(nums) {
    let dict = {};
    let ans = [];
    for (let num of nums)
    {
        if (! (num in dict))
        {
            dict[num] = 1;
        }
        else
        {
            dict[num] = dict[num] + 1;
        }
    }
    console.log(dict);

    while (SumDict(dict) > 0)
    {
        for (let key in dict)
        {
            if (dict[key] > 0)
            {
                ans.push(Number(key));
                dict[key] = dict[key] - 1;
            }
        }
    }
    return ans;
};

let nums = [7,7,4,4,4];
let output = rearrangeArray(nums);
console.log(output);