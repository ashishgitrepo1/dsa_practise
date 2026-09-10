var pickGifts = function(gifts, k) {
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
            //values[parentIndex] = data;
            values[index] = parent

            index = parentIndex;
        }
        values[index] = data;
    }
    for (let item of gifts)
    {
        values.push(item);
        trickleUp();
    }
    console.log(values);

    let trickleDown = function(index)
    {
        console.log("index = ",index);
        let largeIndex;
        let data = values[index];
        console.log("trickle down = ",data,index);
        console.log("tricle down array = ",values);
        let n = values.length/2;


        while(index < n)
        {
            console.log("index checkpoint = ",index);
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex] > values[leftIndex])
            {
                largeIndex = rightIndex;
            }
            else 
            {
                largeIndex = leftIndex;
            }
            console.log("large index = ",largeIndex,values[largeIndex]);
            if (data >= values[largeIndex] || values[largeIndex]===undefined)
            {
                console.log("loop break logic");
                break;
            }
           
            values[index] = values[largeIndex];
            index = largeIndex;
        }
        values[index] = data;
    }
    let output = [];
    for (let i = 0; i < k; ++i)
    {
        let data = Math.round(Math.sqrt(values[0]));
        //console.log("sqrt of data = ", values[0]);
        //removed = values.shift();
        removed = values[0];
        console.log("data removed = ", removed);
        console.log("data inserted = ",data);
        
        //output.push(Math.sqrt(data));
        //values.push(data);
        //trickleUp();
        //console.log("new values = ",values);

        //values.shift();
        let lastdata = values[values.length-1];
        values.pop();
        //console.log("last item = ",values.pop());
        //values[0] = lastdata;
        
        values[0] = lastdata;
        trickleDown(0);
        console.log("after trickle down = ",values);

        values.push(data);
        console.log("trickl up = ",values);
        trickleUp();
        console.log("new values = ",values);
    }
    
    console.log(values);
    let sum = 0;
    for (item of values)
    {
        sum = sum + item;
    }
    return sum;
};

let result = pickGifts([70,58,12,11,41,66,63,14,39,71], 19);
console.log("result = ",result);