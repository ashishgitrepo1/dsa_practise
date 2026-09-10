let numIslands = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let wasVisited = {};
    let count = 0;

    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            wasVisited[[i,j]] = false;
        }
    }
    for (let key in wasVisited)
    {
        console.log("cell = ", key, wasVisited[key]);
    }
    let stack = [];
    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            console.log("second loop",i, j, wasVisited[[i,j]]);
            if (grid[i][j]=="1" && wasVisited[[i,j]]==false)
            {
                
                count++;
                stack.push([i,j]);
                // wasVisited[[i,j]] = true;

                while (stack.length > 0)
                {
                    
                    let removedCell = stack.pop();
                    console.log("removed cell = ",removedCell);
                    let [a, b] = removedCell;
                     wasVisited[[a,b]] = true;
                    console.log("row = ", a);
                    console.log("column = ", b);
                    console.log("cell value = ", grid[a][b]);

                    let leftRow = a;
                    let leftCol = b - 1;

                    if (leftRow>=0  && leftRow<rows && leftCol>=0 && leftCol<cols && wasVisited[[leftRow,leftCol]]==false && grid[leftRow][leftCol]=="1")
                    {
                        // grid[leftRow][leftCol] = 1;
                        console.log("condition 1");
                        wasVisited[[leftRow,leftCol]] = true;
                        stack.push([leftRow,leftCol]);
                    }

                    let rightRow = a;
                    let rightCol = b + 1;

                    console.log(0,1, wasVisited[rightRow, rightCol]);

                    if (rightRow>=0  && rightRow<rows && rightCol>=0 && rightCol<cols && wasVisited[[rightRow,rightCol]]==false && grid[rightRow][rightCol]=="1")
                    {
                        // grid[rightRow][rightCol] = 1;
                        console.log("condition 2");
                        wasVisited[[rightRow,rightCol]] = true;
                        stack.push([rightRow,rightCol]);
                    }

                    let topRow = a-1;
                    let topCol = b;

                    if (topRow>=0 && topRow<rows && topCol<cols && wasVisited[[topRow,topCol]]==false && grid[topRow][topCol]=="1")
                    {
                        // grid[topRow][topCol] = 1;
                        console.log("condition 3");
                        wasVisited[[topRow,topCol]] = true;
                        stack.push([topRow,topCol]);
                    }
                    
                    let bottomRow = a+1;
                    let bottomCol = b;

                    if (bottomRow>=0 && bottomRow<rows && bottomCol<cols && wasVisited[[bottomRow,bottomCol]]==false && grid[bottomRow][bottomCol]=="1")
                    {
                        console.log("condition 4");
                        wasVisited[[bottomRow,bottomCol]] = true;
                        stack.push([bottomRow,bottomCol]);
                    }

                }
            }
        }
    }

for (let key in wasVisited)
{
    console.log(key, wasVisited[key]);
}
console.log("number of Islands = ",count);
    
};

let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

numIslands(grid);