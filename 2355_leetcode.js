let getPartition = function(amount, left, right, pivot)
{
    let leftPtr = left;
    let rightPtr = right-1;

    let Swap = function(amount, left, right)
    {
        let temp = amount[right];
        amount[right] = amount[left];
        amount[left] = temp;
    }

    while (true)
    {
        while (amount[leftPtr] < pivot)
        {
            leftPtr += 1;
        }
        while (amount[rightPtr] >= pivot)
        {
            rightPtr -= 1;
        }
        if (leftPtr > rightPtr)
        {
            break;
        }
        else
        {
            Swap(amount, leftPtr, rightPtr);
        }
    }
    Swap(amount, leftPtr, right);
    return leftPtr;

}
let QuickSort = function(amount, left, right)
{
    if (right-left <= 0)
    {
        return;
    }
    else
    { 
        let pivot = amount[right];
        let partition = getPartition(amount, left, right, pivot);
        QuickSort(amount, left, partition-1);
        QuickSort(amount, partition+1, right);
    }
}
var fillCups = function(amount) {
    let minAmount = 0;
    QuickSort(amount, 0, amount.length-1);
    console.log(amount);
    while ((amount[0]+amount[1]+amount[2]) > 0)
    {
        console.log(amount);
        if (amount[1] >= 1)
        {
            amount[1] -= 1;
        }
        
        if (amount[2] >= 1)
        {
             amount[2] -= 1;
        }
            
            
        
       

        minAmount += 1;
        QuickSort(amount, 0, amount.length-1);

    }
    return minAmount;
};
let amount = [5,0,0];
let output = fillCups(amount);
console.log(output);