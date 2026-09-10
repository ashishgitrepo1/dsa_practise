var maximumSum = function(nums) {
    // return "hello";
    let funcSumdigits = function(num)
    {
        let sum = 0;
        while (num > 0)
        {
            sum = sum + num%10;
            num = Math.floor(num/10);
        }
        return sum;
    }
    let n = nums.length;

    let sumOfdigits = [];

    for (let i=0; i<n; i++)
    {
        sumOfdigits.push(funcSumdigits(nums[i]));
    }
    console.log(sumOfdigits);
    let values = [];
    let dict = {};

    let bool = false;
    for (let i=0; i<n; i++)
    {
        if (!(sumOfdigits[i] in dict))
        {
            dict[sumOfdigits[i]] = [];
            bool = true;
        }
        else if (sumOfdigits[i] in dict)
        {
            bool = false;
        }
        // else
        // {
        //     bool = true;
        //     dict[sumOfdigits[i]] = dict[sumOfdigits[i]] + nums[i];
        //     values.push(dict[sumOfdigits[i]]);
        // }
        dict[sumOfdigits[i]].push(nums[i]);
    }

    console.log(values);
    // console.log(dict);
    for (let key in dict)
    {
        console.log(key, dict[key]);
    }
    // if (bool == false)
    // {
    //     return -1;
    // }
    // else
    // {
    //     return Math.max(...Object.values(dict));
    // }
    // if (bool == true)
    // {
    //     return (Number(Math.max(...values)));
    // }
    // else
    // {
    //     return -1;
    // }
    console.log("$$$$");
    for (let key in dict)
    {
        if (dict[key].length >= 2)
        {
            dict[key].sort((a, b) => a - b);
            console.log(dict[key]);
            a = dict[key][dict[key].length-1];
            b = dict[key][dict[key].length-2];

            values.push(a+b);
        }
    }
    console.log(values);
    if (values.length == 0)
    {
        return -1;
    }
    return Math.max(...values) ;
    
};
let nums = [279,169,463,252,94,455,423,315,288,64,494,337,409,283,283,477,248,8,89,166,188,186,128];
let output = maximumSum(nums);
console.log(output);
