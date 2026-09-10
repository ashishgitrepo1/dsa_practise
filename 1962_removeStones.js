var minStoneSum = function(piles, k) {
    // return "hello W";
    
    let values = [];
    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (data < parent)
            {
                break;
            }
            values[index] = parent;
            index = parentIndex;
        }
        values[index] = data;
    }

    for (let pile of piles)
    {
        values.push(pile);
        trickleUp();
    }
    // console.log(values);

    let trickleDown = function(index)
    {
        let data = values[index];
        let largeIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex]>values[leftIndex])
            {
                largeIndex = rightIndex;
            }
            else
            {
                largeIndex = leftIndex;
            }
            if (values[rightIndex]==undefined || data>values[largeIndex])
            {
                break;
            }
            values[index] = values[largeIndex];
            index = largeIndex;
        }
        values[index] = data;
    }

    for (let i=0; i<k;i++)
    {
        let data = values[0];
        data = data - Math.floor(data/2);
        values[0] = values[values.length-1];
        trickleDown(0);
        values.pop();

        values.push(data);
        trickleUp();
    }
    // console.log(values);
    let sumTotal = 0;
    for (let val of values)
    {
        sumTotal = sumTotal + val;
    }
    return sumTotal;
};
let piles = [4,3,6,7];
let k = 3;
let output = minStoneSum(piles,k);
console.log(output);

