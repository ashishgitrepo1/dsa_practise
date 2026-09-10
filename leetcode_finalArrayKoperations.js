var getFinalState = function(nums, k, multiplier) {
    let values = [];

    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];
        console.log("data to be trickled up = ",data);

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (parent <= data)
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

    let trickleDown = function(index)
    {
        let data = values[index];
        let smallIndex;

        let n = values.length/2;
        while (index < n)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[leftIndex]<values[rightIndex])
            {
                smallIndex = leftIndex;
            }
            else
            {
                smallIndex = rightIndex;
            }
            if (data < values[smallIndex] || values[smallIndex]===undefined)
            {
                break;
            }
            values[index] = values[smallIndex];
            index = smallIndex;
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

    let arr = [];
    for (let j = 0; j < nums.length; ++j)
    {
        arr.push(0);
    }
    
    for (let i = 0; i < k; ++i)
    {
        let item = Delete();
        let index = nums.indexOf(item);
        console.log("index where to insert = ",item,index);
        item = item * multiplier;
        
        console.log("before insert",nums);
        values.push(item);
        
        trickleUp();
        console.log("heap = ",values);
        nums[index] = item;
        console.log("after insert =",nums);
    }
    //return values;
    //return arr;
    return nums;
};

let result = getFinalState([1,3,5],5,3);
console.log("output - ",result);
