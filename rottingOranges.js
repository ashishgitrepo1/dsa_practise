var orangesRotting = function(grid) {
    // return "hello";
   let rows = grid.length;
   let cols = grid[0].length;

   let wasVisited = {};
   for (let i=0; i<rows; i++)
   {
    for (let j=0; j<cols; j++)
    {
        wasVisited[[i,j]]=false;
    }

   }
//    console.log(wasVisited);
   let count = 0;
   for (let i=0; i<rows; i++)
   {
    for (let j=0; j<cols; j++)
    {
        if (grid[i][j] == 2 && wasVisited[[i,j]]==false)
        {
            let queue = [[i,j]];
            wasVisited[[i,j]] = true;

            while (queue.length > 0)
            {
                let bool = false;
                
                let [row,col] = queue.shift();

                let leftRow = row;
                let leftCol = col-1;
                if (leftRow>=0 && leftRow<rows && leftCol>=0 && leftCol<cols && grid[leftRow][leftCol]==1 && wasVisited[[leftRow,leftCol]]==false)
                {
                    wasVisited[[leftRow,leftCol]] = true;
                    queue.push([leftRow,leftCol]);
                    // count++;
                    bool = true;
                }


                let rightRow = row;
                let rightCol = col+1;
                if (rightRow>=0 && rightRow<rows && rightCol>=0 && rightCol<cols && grid[rightRow][rightCol]==1 && wasVisited[[rightRow,rightCol]]==false)
                {
                    wasVisited[[rightRow,rightCol]] = true;
                    queue.push([rightRow,rightCol]);
                    // count++;
                    bool = true;
                }


                let topRow = row-1;
                let topCol = col;
                if (topRow>=0 && topRow<rows && topCol>=0 && topCol<cols && grid[topRow][topCol]==1 && wasVisited[[topRow,topCol]]==false)
                {
                    wasVisited[[topRow,topCol]] = true;
                    queue.push([topRow,topCol]);
                    // count++;
                    bool = true;
                }

                let bottomRow = row+1;
                let bottomCol = col;
                if (bottomRow>=0 && bottomRow<rows && bottomCol>=0 && bottomCol<cols && grid[bottomRow][bottomCol]==1 && wasVisited[[bottomRow,bottomCol]]==false)
                {
                    wasVisited[[bottomRow,bottomCol]] = true;
                    queue.push([bottomRow,bottomCol]);
                    // count++;
                    bool = true;
                }

                if (bool == true)
                {
                    count++;
                }
            }
        }
    }
   }
   for (let i=0; i<rows; i++)
   {
    for (let j=0; j<cols; j++)
    {
        if (grid[i][j]==1 && wasVisited[[i,j]]==false)
        {
            return -1;
        }
    }
   }
   return count;
}
let grid = [[2,1,1],[1,1,1],[0,1,2]];
let output = orangesRotting(grid);
console.log(output);