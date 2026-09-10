let sumPossible = function(amount, numbers)
{
    // console.log(amount,numbers);
    if (amount == 0)
    {
        return true;
    }
    else if (amount < 0)
    {
        return false;
    }

    for (let num of numbers)
    {
        if (sumPossible(amount-num,numbers) == true)
        {
            return true;
        }
    }
    return false;
}
let amount = 2017;
let numbers = [4, 2, 10];

let result = sumPossible(amount, numbers);
console.log(result);