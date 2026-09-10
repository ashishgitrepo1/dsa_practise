var findKthLargest = function(nums, k) {
    let values = [];

    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (parent > data)
            {
                break;
            }
            values[index] = parent;
            index = parentIndex;
        }
        values[index] = data;
    }

    for (let item of nums)
    {
        values.push(item);
        trickleUp();
    }
    console.log("values = ",values);

    let trickleDown = function(index)
    {
        let largeIndex;
        let data = values[index];
        let n = values.length/2;

        while (index < n)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = leftIndex + 1;

            if (rightIndex<values.length && values[leftIndex]>values[rightIndex])
            {
                largeIndex = leftIndex;
            }
            else
            {
                largeIndex = rightIndex;
            }
            if (data >= values[largeIndex] || values[largeIndex]===undefined)
            {
                break;
            }
            values[index] = values[largeIndex];
            index = largeIndex;
        }
        values[index] = data;
    }

    let Delete = function()
    {
        let del = values[0];
        values[0] = values[values.length-1];
        values.pop();
        trickleDown(0);
        return del;
    }

    

    let output;
    for (let i = 0; i < k; ++i)
    {
        console.log(values);
        output = Delete();
        console.log(i+" largest ="+output);

    }
    return output;
};

let result = findKthLargest([3,2,3,1,2,4,5,5,6],9);
console.log("kth largest = ",result);