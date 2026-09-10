var rearrangeBarcodes = function(barcodes) {
    // return "hello world";
    // console.log("hi");
    let dict = {};
    for (let barcode of barcodes)
    {
        if (!(barcode in dict))
        {
            dict[barcode] = 1;
        }
        else
        {
            dict[barcode] = dict[barcode] + 1;
        }
    }
    // console.log(dict);

    // console.log("###");
    let values = [];
    let trickleUp = function()
    {
        let index = values.length - 1;
        let [barcode, barcodeFreq] = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let [parentBarcode, parentBarcodeFrequency] = values[parentIndex];

            if (barcodeFreq < parentBarcodeFrequency)
            {
                break;
            }
            else if(barcodeFreq==parentBarcodeFrequency && barcode>parentBarcode)
            {
                break;
            }
            values[index] = [...values[parentIndex]];
            index = parentIndex;
        }
        values[index] = [...[barcode,barcodeFreq]];
    }
    
    

    for (let barcode in dict)
    {
        values.push([barcode,dict[barcode]]);
        trickleUp();
    }
    // console.log(values);
    let totalFreq = 0
    for (let item of values)
    {
        console.log(item);
        totalFreq = totalFreq + item[1];
    }
    // console.log(totalFreq);

    let trickleDown = function(index)
    {
        let [barcode,barcodeFreq] = values[index];
        let largeIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex][1]>values[leftIndex][1])
            {
                largeIndex = rightIndex;
            }
            // else if(rightIndex<values.length && values[rightIndex][1]==values[leftIndex][1] && values[rightIndex][0]>values[leftIndex][0])
            // {
            //     largeIndex = rightIndex;
            // }
            else
            {
                largeIndex = leftIndex;
            }
            if (values[largeIndex]==undefined || barcodeFreq>values[largeIndex][1])
            {
                break;
            }
            values[index] = [...values[largeIndex]];
            index = largeIndex;
        }
        values[index] = [...[barcode,barcodeFreq]];
    }

    let result = [];
    let deduct = 0;
    while (totalFreq > 0)
    {
        let data1 = values[0];
        result.push(Number(data1[0]));
        values[0] = [...values[values.length-1]];
        trickleDown(0);
        values.pop();
        // deduct++;

        let data2 = values[0];
        result.push(Number(data2[0]));
        values[0] = [...values[values.length-1]];
        trickleDown(0);
        values.pop();
        // deduct++
        console.log("after 2 pops");
        for (let item of values)
        {
            console.log(item);
        }

        if (data1[1]>0)
        {
            values.push([...[data1[0],data1[1]-1]]);
            trickleUp();
            console.log("data 1");
            for (let item of values)
            {
                console.log(item);
            }
        }

        if (data2[1]>0)
        {
            values.push([...[data2[0],data2[1]-1]]);
            trickleUp();
            // console.log(values);
            console.log("data 2");
            for (let item of values)
            {
                console.log(item);
            }
        }

        totalFreq = totalFreq - 2;
        
    }

    return result;

    
};
let barcodes = [1,1,2];
let output = rearrangeBarcodes(barcodes);
console.log(output);
