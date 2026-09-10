let nextGreaterElements = function(nums) {
    let n = nums.length - 1;
    let stack = [];
    let output = [];

    for (let i=n; i>=0; i--)
    {
        while (stack.length>0 && nums[i]>=stack[stack.length-1])
        {
            stack.pop();
        }
        if (stack.length == 0)
        {
            output.unshift(-1);
        }
        else
        {
            output.unshift(stack[stack.length-1]);
        }

        stack.push(nums[i]);
    }
    // output = [];
   
    // for (let j=n; j>=0; j--)
    // {
       
    //     while (stack.length>0 && nums[j]>=stack[stack.length-1])
    //     {
    //         stack.pop();
    //     }
    //     if (stack.length == 0)
    //     {
    //         output.unshift(-1);
    //     }
    //     else
    //     {
    //         output.unshift(stack[stack.length-1]);
    //     }

    //     stack.push(nums[j]);
    // }
    return output;
};
let nums = [3, 8, 4, 1, 2];
let output = nextGreaterElements(nums);
console.log(output);
