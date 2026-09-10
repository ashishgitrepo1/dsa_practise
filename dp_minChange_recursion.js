let minChange_recursion = function(amount,coins)
{
    console.log(amount,coins);
    if (amount == 0)
    {
        return 0;
    }
    if (amount < 0)
    {
        return Infinity;
    }
    let minChange = Infinity;
    for (let coin of coins)
    {
        console.log('inside loop',amount,coins);
        let remainingAmount = 1 + minChange_recursion(amount-coin,coins);
        if (remainingAmount < minChange)
        {
            minChange = remainingAmount;
        }
    }
    console.log('outside loop',minChange);

    return minChange;
}

let amount = 5;
let coins = [1, 2, 3];
let output = minChange_recursion(amount,coins);
console.log(output);