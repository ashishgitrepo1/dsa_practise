

let majorityElement = function(nums)
{
    let hash = {};
    let n = nums.length;

    for (let i=0; i<n; ++i)
    {
        //console.log(nums[i], nums[i] in hash);
        if (nums[i] in hash)
        {
            hash[nums[i]] = hash[nums[i]]+1;
            
        }
        else
        {
            hash[nums[i]] = 1;
            console.log(hash);
        }
    }
    console.log("hash = ",hash);
    for (let item in hash)
    {
        console.log(item);
        if (hash[item]>n/2)
        {
            return item;
        }
    }
}

let nums = [2,2,1,1,1,2,2];
let output = majorityElement(nums);
console.log("majority element = ",output);