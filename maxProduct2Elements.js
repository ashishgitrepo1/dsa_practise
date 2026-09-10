var maxProduct = function(nums) {
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
            index = parentIndex
        }
        values[index] = data;

        // console.log(values);
    }
    for (let num of nums)
    {
        values.push(num);
        trickleUp();
    }

    let trickleDown = function(index)
    {
        let data = values[index];
        let largeIndex;

        while (index<values.length/2)
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
            if (data>values[largeIndex] && values[largeIndex]==undefined)
            {
                break;
            }
            values[index] = values[largeIndex];
            index = largeIndex;
        }
        values[index] = data;
    }
    a = values[0];
    last_a = values[values.length-1];
    values[0] = last_a;
    trickleDown(0);
    values.pop();

    b = values[0];
    last_b = values[values.length-1];
    values[0] = last_b;
    trickleDown(0);
    values.pop();

    return (a-1)*(b-1);
};
let nums = [3,7];
let output = maxProduct(nums);
console.log(output);