var kWeakestRows = function(mat, k) {
    // return "hello ";
    let rows = mat.length;
    let cols = mat[0].length;

    let ones = [];
    for (let i=0; i<rows; i++)
    {
       let count = 0;
       for (let j=0; j<cols; j++)
       {
        if (mat[i][j] == 1)
        {
            count++;
        }
       }
       ones.push([i,count]);
    }
    // console.log(ones);
    // for (let item of ones)
    // {
    //     console.log(item);
    // }

    let n = ones.length;
    let values = [];

    let trickleUp = function()
    {
        let index = values.length - 1;
        let [row,data] = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let [parentRow, parentData] = values[parentIndex];

            if (data > parentData)
            {
                break;
            }
            values[index] = [parentRow,parentData];
            index = parentIndex;
        }
        values[index] = [row,data];
        // console.log(values);
    }

    for (let i=0; i<n; i++)
    {
        let [a,b] = ones[i];
        values.push(ones[i]);
        trickleUp();
    }
    // console.log("+++++");
    // for (let item of values)
    // {
    //     console.log(item);
    // }
    let result = {};

    let trickleDown = function(index)
    {
        let [row,data] = values[index];
        // let largeIndex;
        let smallIndex

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[leftIndex][1]<values[rightIndex][1])
            {
                smallIndex = leftIndex;
            }
            else
            {
                smallIndex = rightIndex;
            }
            if (data<values[smallIndex] || values[smallIndex]==undefined)
            {
                break;
            }
            values[index] = values[smallIndex];
            index = smallIndex;
        }
        values[index] = [row,data];
    }

    while(values.length > 0)
    {
        let index = values.length - 1;
        let [outputRow,outputData] = values[0];
        result[outputRow] = outputData;
        values[0] = values[index];
        trickleDown(0);
        values.pop();
    }
    console.log(result);
    // console.log("*******");
    // for (let res of result)
    // {
    //     console.log(res);
    // }
    let finalOutput = [];
    const entries = Object.entries(result);
// entries is now: [ [ '3', 100 ], [ '1', 75 ], [ '2', 116 ], [ '4', 15 ] ]

// 2. Sort the array based on the *values* (index 1 of each pair)
// For numeric sorting, use a comparison function `(a, b) => a - b`
entries.sort((a, b) => a[1] - b[1]);

// entries is now sorted by value: [ [ '4', 15 ], [ '1', 75 ], [ '3', 100 ], [ '2', 116 ] ]

// 3. Convert the sorted array of pairs back into a new object
const sortedDict = Object.fromEntries(entries);
    console.log(sortedDict);


    // return finalOutput.slice(0,k);

};
let mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]];
let k = 2;

let output = kWeakestRows(mat,k);
console.log(output);