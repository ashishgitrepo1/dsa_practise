/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let n = nums.length;
    let numsTotal = 0;

    for (let num of nums)
    {
        numsTotal += num;
    }
    let avg = Math.floor(numsTotal/n);
    avg += 1;

    if (avg <= 0)
    {
        while (avg <= 0)
        {
            avg += 1;
        }
    }

    while (nums.includes(avg))
    {
        avg += 1;

        //console.log("avg outside = ",avg);
        
        
       
    }
    
    return avg;
};

let nums = [3,5];
let output = smallestAbsent(nums);
console.log(output);
