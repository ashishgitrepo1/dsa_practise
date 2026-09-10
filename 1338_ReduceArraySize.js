var minSetSize = function(arr) {
    // return "hello w";
    let dict = {};
    for (let num of arr)
    {
        if (!(num in dict))
        {
            dict[Number(num)] = 1;
        }
        else
        {
            dict[Number(num)] = dict[Number(num)] + 1;
        }

    }
   

    // console.log(dict);
    let values = [];
    let trickleUp = function()
    {
        let index = values.length - 1;
        let [data, frequency] = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let [parentData, parentFrequency] = values[parentIndex];

            if (frequency < parentFrequency)
            {
                break;
            }
            values[index] = [...values[parentIndex]];
            index = parentIndex;
        }
        values[index] = [...[data,frequency]];
    }
    for (let key in dict)
    {
        values.push([key,dict[key]]);
        trickleUp();
    }
    // console.log(values);
    // for (let item of values)
    // {
    //     console.log(item);
    // }

    let valueTotal = 0;

   
        for (let num in dict)

        {
            valueTotal = valueTotal + dict[num];
        }
    
    
    // console.log("total sum values ",valueTotal,valueTotal/2);
    let setTotal = 0;
    let i = 0;

    let trickleDown = function(index)
    {
        let [data, frequency] = values[index];
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
            if (values[largeIndex]==undefined || frequency>values[largeIndex][1])
            {
                break;
            }
            values[index] = [...values[largeIndex]];
            index = largeIndex;
        }
        values[index] = [...[data, frequency]];
    }

   
    
    
    while (i < valueTotal/2)
    {
        // console.log("check i = ",i);
        
        let [data,dataFrequency] = values[0];
        // console.log("data removed = ",data, dataFrequency);
        values[0] = [...values[values.length-1]];
        trickleDown(0);
        values.pop();
        delete dict[data];
        setTotal++;
        i = i + dataFrequency;
        if (i > valueTotal/2)
        {
            break;
        }
    }
    return setTotal;

};
let arr = [7,7,7,7,7,7];
let output = minSetSize(arr);
console.log(output);
