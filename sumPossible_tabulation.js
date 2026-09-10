let sumPossible_tabulation = function(amount, numbers)
{
    let arr = [];
    for (let i=0; i<=amount; i++)
    {
        arr.push(false);
    }
    arr[0] = true;
    // console.log(arr);
    for (let i=0; i<=amount; i++)
    {
        for (let num of numbers)
        {
            if (i+num<=amount && arr[i+num]==true)
            {
                if (arr[i+num] == false)
                {
                    arr[i+num] = true;
                }
            }
            else
            {
                continue;
            }
        }
    }
    // console.log(arr);
    return arr[amount];
}
let numbers = [4, 2, 10];
let amount = 2017;

let result = sumPossible_tabulation(amount,numbers);
console.log(result);