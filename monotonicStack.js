
let monotonicStack = function(nums)
{
    let n = nums.length-1;
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
        //  console.log(stack);
    }
    return output;
}
let nums = [2, 1, 2, 4, 3];
let output = monotonicStack(nums);
console.log(output);