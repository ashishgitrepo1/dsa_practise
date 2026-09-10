var lastStoneWeight = function(stones) {
    // return "hello";
    let values = [];
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
    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2)
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
    for (let stone of stones)
    {
        values.push(stone);
        trickleUp();
    }

    while (values.length > 1)
    {
        console.log("values length = ",values.length);
        x = values[0];
        last_x = values[values.length-1];
        values[0] = last_x;
        trickleDown(0);
        values.pop();
        
        

        y = values[0];
        last_y = values[values.length-1];
        values[0] = last_y;
        trickleDown(0);
        values.pop();
        
        
        if (x != y)
        {
            values.push(x-y);
            trickleUp();
        }

    }
    console.log(values);
    if (values.length > 0)
    {
        return values[0];
    }
    else
    {
        return 0;
    }
};
let stones = [2,7,4,1,8,1];
let output = lastStoneWeight(stones);
console.log(output);