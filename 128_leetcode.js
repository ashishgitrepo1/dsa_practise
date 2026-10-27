/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let dict = {};
    for (let num of nums)
    {
        if (! (num in dict))
        {
            dict[num] = 1;
        }
        else
        {
            dict[num] = dict[num]+1;
        }
    }
    // console.log(dict);

    let sequence = 0;
    // console.log(...Object.keys(dict));
    let numsArray = Object.keys(dict).sort((a,b)=>a-b);
    //console.log(numsArray);
    let n = numsArray.length;
    let longestSequence = -Infinity;
    for (let i=0; i<n; i++)
    {
        if (Math.abs(Number(numsArray[i])-Number(numsArray[i+1])) == 1)
        {
            // console.log(Number(numsArray[i]), Number(numsArray[i+1]), Math.abs(Number(numsArray[i])-Number(numsArray[i+1])));
            sequence += 1;
        }
        else
        {
            longestSequence = Math.max(longestSequence, sequence+1);
            sequence = 0;
            //break;
        }
    }
    if (Object.keys(dict).length == 0)
    {
        return 0;
    }
    return longestSequence;

};

let nums = [1,0,1,2];
let output = longestConsecutive(nums);
console.log(output);