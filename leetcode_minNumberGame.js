var numberGame = function(nums) {
    let values = [];

    let trickleUp = function()
    {
        //console.log("trickel up fun");
        let index = values.length - 1;
        let data = values[index];

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
    console.log("minimum nums = ",values);

    let trickleDown = function(index)
    {
        let largeIndex;
        let data = values[index];
        let n = values.length/2;
        while (index < n)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[leftIndex]<=values[rightIndex])
            {
                largeIndex = leftIndex;
            }
            else
            {
                largeIndex = rightIndex;
            }
            if (data < values[largeIndex] || values[largeIndex]===undefined)
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
        
        if (values.length > 0)
        {
            trickleDown(0);
            
        }
        else
        {
            return del;
        }
        return del;
    }

    
    let n = values.length;
    let arr = [];
    while (n > 0)
    {
        a = Delete();
        b = Delete();
        console.log("value of a = ",a);
        console.log("value of b = ",b);

        arr.push(b,a);
        n = values.length;
    }
    return arr;
};

let result = numberGame([2,5,3,8]);
console.log("output = ", result);