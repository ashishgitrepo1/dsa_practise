let maxAreaOfIsland = function(grid) {
    // console.log(grid);

    let wasVisited = {};
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            wasVisited[[i,j]] = false;
        }
    }
    // console.log(wasVisited);

    let area = {};
    let stack = [];

    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            if (grid[i][j]==1 && wasVisited[[i,j]]==false)
            {
                let count = 1;
                wasVisited[[i,j]] = true;
                stack.push([i,j]);

                while(stack.length > 0)
                {
                    let removedCell = stack.pop();
                    let [a, b] = removedCell;

                    let leftRow = a;
                    let leftCol = b - 1;

                    if (leftRow>=0  && leftRow<rows && leftCol>=0 && leftCol<cols && wasVisited[[leftRow,leftCol]]==false && grid[leftRow][leftCol]=="1")
                    {
                        // grid[leftRow][leftCol] = 1;
                        // console.log("condition 1");
                        wasVisited[[leftRow,leftCol]] = true;
                        stack.push([leftRow,leftCol]);
                        count++
                    }

                    let rightRow = a;
                    let rightCol = b + 1;

                    console.log(0,1, wasVisited[rightRow, rightCol]);

                    if (rightRow>=0  && rightRow<rows && rightCol>=0 && rightCol<cols && wasVisited[[rightRow,rightCol]]==false && grid[rightRow][rightCol]=="1")
                    {
                        // grid[rightRow][rightCol] = 1;
                        // console.log("condition 2");
                        wasVisited[[rightRow,rightCol]] = true;
                        stack.push([rightRow,rightCol]);
                        count++;
                    }

                    let topRow = a-1;
                    let topCol = b;

                    if (topRow>=0 && topRow<rows && topCol<cols && wasVisited[[topRow,topCol]]==false && grid[topRow][topCol]=="1")
                    {
                        // grid[topRow][topCol] = 1;
                        // console.log("condition 3");
                        wasVisited[[topRow,topCol]] = true;
                        stack.push([topRow,topCol]);
                        count++;
                    }
                    
                    let bottomRow = a+1;
                    let bottomCol = b;

                    if (bottomRow>=0 && bottomRow<rows && bottomCol<cols && wasVisited[[bottomRow,bottomCol]]==false && grid[bottomRow][bottomCol]=="1")
                    {
                        // console.log("condition 4");
                        wasVisited[[bottomRow,bottomCol]] = true;
                        stack.push([bottomRow,bottomCol]);
                        count++;
                    }
                }
                area[[i,j]] = count;
            }
        }
    }
    // console.log("areas = ", area);
    let result = [];
    for (let key in area)
    {
        // console.log(key, area[key]);
        result.push(area[key]);

    }
    if (Object.keys(area).length === 0)
    {
        console.log(0);
    }
    else
    {
        console.log(Math.max(...result));
    }
    
};

let grid = [[0,0,0,0,0,0,0,0]];

maxAreaOfIsland(grid);