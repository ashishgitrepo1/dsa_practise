
var maxSubsequence = function(nums, k) {
    // return "max sub";
    let n = nums.length;
    let numsIndices = [];

    for (let i=0; i<n; i++)
    {
        numsIndices.push([i,nums[i]]);
    }
    // console.log(numsIndices);
    // for (let item of numsIndices)
    // {
    //     console.log(item);
    // }

    let trickleUp = function()
    {
        let index = values.length - 1;
        let [dataIndex, data] = values[index];
        // console.log("trickle up = ",[dataIndex,data]);

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex][1];

            if (data < parent)
            {
                break;
            }
            values[index] = [...values[parentIndex]];
            index = parentIndex;
        }
        values[index] = [...[dataIndex,data]];
        // for (let val of values)
        // {
        //     console.log(val);
        // }
        // console.log("#####");
    }
    let values = [];
    for (let num of numsIndices)
    {
        values.push(num);
        trickleUp();
    }
    // console.log(values);
    // for (let item of values)
    // {
    //     console.log(item);
    // }
    // console.log("++++++++");

    let trickleDown = function(index)
    {
        let [dataIndex,data] = values[index];
        let largeIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex][1]>values[leftIndex][1])
            {
                largeIndex = rightIndex;
            }
            else
            {
                largeIndex = leftIndex;
            }
            // console.log("large index = ",values[largeIndex]);
            if (values[largeIndex]==undefined || data>values[largeIndex][1]  )
            {
                break;
            }
            values[index] = [...values[largeIndex]];
            index = largeIndex;
        }
        values[index] = [...[dataIndex,data]];
    }
    let output = {};
    for (let i=0; i<k; i++)
    {
        let [dataIndex, data] = values[0];
        // console.log("max data = ",dataIndex,data);
        output[dataIndex] = data;
        values[0] = values[values.length - 1];
        trickleDown(0);
        values.pop();
    }

    // console.log(output);

    let finalOutput = [];
    for (let key in output)
    {
        finalOutput.push(output[key]);
    }
    return finalOutput;
};
let nums = [-1,-2,3,4];
let k = 3;

let output = maxSubsequence(nums,k);
console.log(output);

