/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
let Swap = function(capacity, left, right)
{
    let temp = capacity[right];
    capacity[right] = capacity[left];
    capacity[left] = temp;
}
let getPartition = function(capacity, left, right, pivot)
{
    let leftPtr = left;
    let rightPtr = right-1;

    while(true)
    {
        while (capacity[leftPtr] < pivot)
        {
            leftPtr +=1 ;
        }
        while (capacity[rightPtr] >= pivot)
        {
            rightPtr -= 1;
        }
        if (leftPtr > rightPtr)
        {
            break;
        }
        else
        {
            Swap(capacity, leftPtr, rightPtr);
        }
    }
    Swap(capacity, leftPtr, right);
    return leftPtr;
}
let Quicksort = function(capacity, left, right)
{
    if (right-left <= 0)
    {
        return;
    }
    else
    {
        let pivot = capacity[right];
        let partition = getPartition(capacity, left, right, pivot);
        Quicksort(capacity, left, partition-1);
        Quicksort(capacity, partition+1, right);
    }
}
var minimumBoxes = function(apple, capacity) {
    Quicksort(capacity, 0, capacity.length-1);
    console.log(capacity);
    let minBoxes = 0;
    let totalCapacity = 0;
    let totalApples = 0;
    for (let fruit of apple)
    {
        totalApples += fruit;
    }
    let n = capacity.length-1;
    for (let i=n; i>=0; i--)
    {
        if (totalCapacity < totalApples)
        {
            totalCapacity += capacity[i];
            minBoxes += 1;
        }
        else
        {
            break;
        }
    }
    return minBoxes;
};

let apple = [5,5,5];
let capacity = [2,4,2,7];

let output = minimumBoxes(apple, capacity);
console.log(output);