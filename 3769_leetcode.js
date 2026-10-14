/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    let dict = {};
    for (let num of nums)
    {
        let value = parseInt((num.toString(2)).split('').reverse().join(''),2);
        if (! (value in dict))
        {
            dict[value] = [num];
        }
        else
        {
            dict[value].push(num);
        }
    }
    console.log(dict);

    let arr = [];
    for (let key in dict)
    {
        console.log(key, dict[key], dict[key].sort());
        arr.push(...dict[key].sort());
    }
    return arr;
};

let nums = [32,4,12];
let output = sortByReflection(nums);
console.log(output);