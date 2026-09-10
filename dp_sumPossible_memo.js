let dp_sumPossible = function(amount, nums, memo={})
{
    console.log(amount,memo);
    if (amount in memo)
    {
        return memo[amount];
    }
    if (amount == 0)
    {
        return true;
    }
    if (amount < 0)
    {
        return false;
    }

    for (let num of nums)
    {
        // console.log('inside loop');
        // console.log(amount, memo);
        if (dp_sumPossible(amount-num,nums,memo) == true)
        {
            memo[amount] = true;
            return true;
        }
        
    }
    console.log('out of loop');
    memo[amount] = false;
    console.log(amount,memo);
    return false;
}

let amount = 15;
let nums = [6, 4, 10];
let result = dp_sumPossible(amount,nums);
console.log(result);