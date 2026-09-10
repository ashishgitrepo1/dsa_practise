var kthSmallest = function(matrix, k) {
    // return "hello worl";
    let values = [];
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

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let row=0; row<rows; row++)
    {
        for (let col=0; col<cols; col++)
        {
            values.push(matrix[row][col]);
            trickleUp();
        }
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
    let result;
    for (let i=0; i<k; i++)
    {
        result = values[0];
        // console.log("result = ",result);
        values[0] = values[values.length - 1];
        trickleDown(0);
        values.pop();
    }
    return result;
};
let matrix = [[-5]];
let k = 1;
let output = kthSmallest(matrix,k);
console.log(output);