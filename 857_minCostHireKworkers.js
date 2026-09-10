var mincostToHireWorkers = function(quality, wage, k) {
    let one = wage[0]/quality[0];

    let qualityage = [];
    let n = quality.length;
    for (let i=0; i<n; i++)
    {
        if (quality[i]*one >= wage[i])
        {
            qualityage.push(quality[i]*one);
        }
       
    }
    // console.log(qualityage);
    

    let values = [];
    let total = 0;

    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];
        
        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (data>parent)
            {
                break;

            }
            values[index] = parent;
            index = parentIndex;
        }
        values[index] = data;
        
    }


    for (let num of qualityage)
    {
        values.push(num);
        trickleUp();
    }
    console.log(values);

    let trickleDown = function(index)
    {
        let data = values[index];
        let smallIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex]<values[leftIndex])
            {
                smallIndex = rightIndex;

            }
            else
            {
                smallIndex = leftIndex;
            }
            if (values[smallIndex]==undefined || data<values[smallIndex])
            {
                break;
            }
            values[index] = values[smallIndex];
            index = smallIndex;
        }
        values[index] = data;
    }


    for (let i=0; i<k; i++)
    {
        total = total + values[0];
        values[0] = values[values.length-1];
        trickleDown(0);
        values.pop();
    }
    // console.log(typeof(total.toFixed(5)));
    return parseFloat(total.toFixed(5));

};

let quality = [10,20,5];
let wage = [70,50,30];
let k=2;

let output = mincostToHireWorkers(quality,wage,k);
console.log(output);