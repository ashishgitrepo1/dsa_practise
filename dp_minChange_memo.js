let dp_minChange = function(amount, coins, memo={})
{
    console.log(amount,memo);
    if (amount in memo)
    {
        return memo[amount];
    }
    if (amount == 0)
    {
        return 0;
    }
    if (amount < 0)
    {
        return Infinity;
    }
    let minChange = Infinity;
    // console.log(amount,coins,minChange);

    for (let coin of coins)
    {
        let remainingChange = 1+dp_minChange(amount-coin,coins, memo);
        // let currentChange = remainingChange;
        // console.log(currentChange);

        if (remainingChange < minChange)
        {
            minChange = remainingChange;
        }
        // minChange = minChange+1;
        // minChange = minChange+1;
    }
    
    memo[amount] = minChange;
    console.log('out of loop');
    console.log(amount,memo);
    return minChange;
}

let amount = 5;
let coins = [1, 2, 3];
let result = dp_minChange(amount, coins);
if (result == Infinity)
{
    console.log(-1);
}
else
{
    console.log(result);
}
