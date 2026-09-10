var longestIncreasingPath = function(matrix) {
    // return "hello world";
    let rows = matrix.length;
    let cols = matrix[0].length;

    let dp = [];
    for (let i=0; i<rows; i++)
    {
        dp[i] = [];
        for (let j=0; j<cols; j++)
        {
            dp[i].push([]);
        }
    }
    // console.log(dp);
    // for (let i=0; i<rows; i++)
    // {
    //     for (let j=0; j<cols; j++)
    //     {
    //         dp[i][j].push(matrix[i][j]);
    //     }
    // }
    // console.log(dp);
    // for (let i=0; i<rows; i++)
    // {
    //     for (let j=0; j<cols; j++)
    //     {
    //         console.log(dp[i][j]);
    //     }
    // }
    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            let [row,col] = [i,j];

            let leftRow = row;
            let leftCol = col-1;
            if (leftRow>=0 && leftRow<rows && leftCol>=0 && leftCol<cols)
            {
                if (matrix[leftRow][leftCol]>matrix[row][col])
                {
                    if (dp[row][col].length == 0)
                    {
                        let newArray = [matrix[row][col],matrix[leftRow][leftCol]];
                        dp[row][col].push(newArray);
                    }
                    else
                    {

                    }
                    
                }
            }


            let rightRow = row;
            let rightCol = col+1;
            

            

            let topRow = row-1;
            let topCol = col;

            let bottomRow = row+1;
            let bottomCol = col;
            if (bottomRow>=0 && bottomRow<rows && bottomCol>=0 && bottomCol<cols)
            {
                if (matrix[bottomRow][bottomCol]>matrix[row][col])
                {
                    if (dp[])
                }
            }

        }
    }
// for (let i=0; i<rows; i++)
//     {
//         for (let j=0; j<cols; j++)
//         {
//             console.log(...dp[i][j]);
//         }
//     }
};
let matrix = [[9,9,4],[6,6,8],[2,1,1]];

let output = longestIncreasingPath(matrix);
console.log(output);