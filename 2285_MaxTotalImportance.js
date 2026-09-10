var maximumImportance = function(n, roads) {
    // return "hi";
    let dict = {};
    for (let edge of roads)
    {
        let [a,b] = edge;
        if (!(a in dict))
        {
            dict[a] = 1;
        }
        else
        {
            dict[a] = dict[a]+1;
        }
        if (!(b in dict))
        {
            dict[b] = 1;
        }
        else
        {
            dict[b] = dict[b]+1;
        }
    }
    for (let i=0; i<n; i++)
    {
        if (!(i in dict))
        {
            dict[i] = 0;
        }
    }
    console.log(dict);
    let trickleUp = function()
    {
        let index = values.length - 1;
        let data = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (data > parent)
            {
                break;
            }
            values[index] = values[parentIndex];
            index = parentIndex;
        }
        values[index] = data;
    }
    let values = [];
    for (let key in dict)
    {
        values.push(dict[key]);
        trickleUp();
    }
    console.log(values);
    console.log("####");
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
            if (values[rightIndex]==undefined || data<values[smallIndex])
            {
                break;
            }
            values[index] = values[smallIndex];
            index = smallIndex;
        }
        values[index] = data;
    }
    let result = [];
    for (let i=0; i<n; i++)
    {
        let data = values[0];
        result.push(data);
        values[0] = values[values.length-1];
        trickleDown(0);
        values.pop();
    }

    console.log(result);
    let total = 0;
    // for (let i=0; i<n; i++)
    // {
    //     if (result[i]==undefined)
    //     {
    //         result[i] = 0;
    //     }
    // }

    for (let i=1; i<=n; i++)
    {
        total = total + result[i-1]*i;
    }
    return total;
};
let n = 5;
let roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]];
let output = maximumImportance(n, roads);
console.log(output);

