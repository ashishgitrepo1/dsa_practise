/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
let Swap = function(prices, left, right)
{
    let temp = prices[right];
    prices[right] = prices[left];
    prices[left] = temp;
}
let getPartition = function(prices, left, right, pivot)
{
    let leftPtr = left;
    let rightPtr = right-1;

    while (true)
    {
         while (prices[leftPtr] < pivot)
            {
                leftPtr += 1;
            }
        while (prices[rightPtr] >= pivot)
        {
            rightPtr -= 1;
        }
        if (leftPtr > rightPtr)
        {
            break;

        }
        else
        {
            Swap(prices, leftPtr, rightPtr);
        }
    }
    Swap(prices, leftPtr, right);
    return leftPtr;

   
}
let Quicksort = function(prices, left, right)
{
    if (right-left <= 0)
    {
        return;
    }
    else
    {
        let pivot = prices[right];
        let partition = getPartition(prices, left, right, pivot);
        Quicksort(prices, left, partition-1);
        Quicksort(prices, partition+1, right);
    }
}
var buyChoco = function(prices, money) {
    Quicksort(prices, 0, prices.length-1);
    console.log(prices);
    if (money-(prices[0]+prices[1]) < 0)
    {
        return money;
    }
    else
    {
        return money-(prices[0]+prices[1]);
    }
};

let prices = [1,2,2];
let money = 3;

let output = buyChoco(prices, money);
console.log(output);