var findRelativeRanks = function(score) {
    // return "hello world";
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

    for (let num of score)
    {
        values.push(num);
        trickleUp();
        // console.log(values);
    }
    // console.log("heap = ", values);
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
            if (data>values[largeIndex] || values[largeIndex]==undefined)
            {
                break;
            }
            values[index] = values[largeIndex];
            index = largeIndex;

        }
        values[index] = data;
    }
    let output = {};
    let n = score.length;

    for (let i=0; i<n; i++)
    {
        // console.log("values length 1 = ",values);
        let item = values[0];
        output[item] = i+1;
        let data = values[values.length-1];
        values[0] = data;
        values.pop();
        trickleDown(0);
        // console.log("i, values length 2 = ", values);
        // n = values.length;
    }
    // console.log("final values length = ",values.length);
    // console.log(output);
    // console.log(output[undefined]);
    for (let num of score)
    {
        if (!(num in output))
        {
            output[num] = output[undefined];
        }
    }
    delete output[undefined];
    // console.log(output);
    let result = [];
    for (let item of score)
    {
        let rank = output[item];
        if (rank == 1)
        {
            result.push("Gold Medal");
        }
        else if (rank == 2)
        {
            result.push("Silver Medal");
        }
        else if (rank == 3)
        {
            result.push("Bronze Medal");
        }
        else
        {
            result.push(String(rank));
        }
    }
    // console.log(result);
    return result;

};
let score = [10,3,8,9,4];
let output = findRelativeRanks(score);
console.log(output);
