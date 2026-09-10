var findClosestElements = function(arr, k, x) {
    // return "find closest";
    let values = [];
    let trickleUp = function()
    {
        let index = values.length-1;
        let [data,difference] = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let [parent, parentDifference] = values[parentIndex];

            if ((difference>parentDifference) || (difference==parentDifference && data>=parent))
            {
                break;
            }
            values[index] = [...values[parentIndex]];
            index = parentIndex;
        }
        values[index] = [...[data,difference]];
    }
    
    for (let num of arr)
    {
        values.push([num,Math.abs(num-x)]);
        trickleUp();
    }

    // for (let item of values)
    // {
    //     console.log(item);
    // }

    let trickleDown = function(index)
    {
        let [data, dataDifference] = values[index];
        let smallIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex][1]<values[leftIndex][1])
            {
                smallIndex = rightIndex;
            }
            else if (rightIndex<values.length && values[rightIndex][1]==values[leftIndex][1] && values[rightIndex][0]<values[leftIndex][0])
            {
                smallIndex = rightIndex;
            }
            else
            {
                smallIndex = leftIndex;
            }
            if (values[smallIndex]==undefined || dataDifference<values[smallIndex][1] || (dataDifference==values[smallIndex][1] && data<values[smallIndex][0]))
            {
                break;
            }
            values[index] = [...values[smallIndex]];
            index = smallIndex;
        }
        values[index] = [...[data,dataDifference]];
    }
    let result = [];
    for (let i=0; i<k; i++)
    {
        let [output,outputDifference] = values[0];
        result.push(output);
        values[0] = [...values[values.length-1]];

        trickleDown(0);
        values.pop();
    }
    
    // console.log("####");
    // console.log(result);

    return result.sort((a, b) => a - b);
};
let arr = [0,0,1,2,3,3,4,7,7,8];
let k = 3;
let x = 5;

let output = findClosestElements(arr,k,x);
console.log(output);
