var maxKelements = function(nums, k) {
    // return "hello";
    
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

    for (let num of nums)
    {
        values.push(num);
        trickleUp();
    }
    // console.log("####");
    // console.log(values);
    // console.log("####");

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
            if (values[largeIndex]==undefined || data>values[largeIndex])
            {
                break;
            }
            values[index] = values[largeIndex];
            index = largeIndex;
        }
        values[index] = data;
    }

    let maxSum = 0;
    for (let i=0; i<k; i++)
    {
        let addNum = values[0];
        maxSum = maxSum + addNum;
        values[0] = values[values.length-1];
        trickleDown(0);
        values.pop();

        values.push(Math.ceil(addNum/3));
        trickleUp();
        // console.log(values);

    }
    return maxSum;
    
};
let nums = [10,10,10,10,10];
let k = 5;
let output = maxKelements(nums,k);
console.log(output);

