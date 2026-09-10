let closedIsland = function(grid) {
   let rows = grid.length;
   let cols = grid[0].length;

   let trackCell = {};
   let wasVisited = {};
   for (let i=1; i<rows-1; i++)
   {
    for (let j=1; j<cols-1; j++)
    {
        wasVisited[[i,j]] = false;
    }
   }
   console.log(wasVisited);
   
   for (let i=1; i<rows-1; i++)
   {
    for (let j=1; j<cols-1; j++)
    {
        if (grid[i][j] == 0)
        {
            let queue = [[i,j]];
            wasVisited[[i,j]] = true;

            while (queue.length > 0)
            {
                let [row,col] = queue.shift();
                trackCell[[i,j]] = [[row,col]];
                
                let leftRow = row;
                let leftCol = col-1;
                if (grid[leftRow][leftCol]==0 && wasVisited[[leftRow,leftCol]]==false )
                {
                    wasVisited[[leftRow,leftCol]]=true;
                    queue.push([leftRow,leftCol]);
                    if (Object.keys(trackCell[[i,j]]).length == 0)
                    {
                        trackCell[[i,j]] = [];
                        
                    }
                    
                    trackCell[[i,j]].push([leftRow,leftCol]);
                    
                   
                }

                let rightRow = row;
                let rightCol = col+1;
                if (grid[rightRow][rightCol]==0 && wasVisited[[rightRow,rightCol]]==false )
                {
                    console.log("right side ");
                    wasVisited[[rightRow,rightCol]]=true;
                    queue.push([rightRow,rightCol]);
                    console.log(trackCell, trackCell[[i,j]],Object.keys(trackCell[[i,j]]).length);
                    
                    // for (let key in trackCell);
                    // {
                    //     console.log(key);
                    // }
                    if (Object.keys(trackCell[[i,j]]).length == 0)
                    {
                        trackCell[[i,j]] = [];
                        
                    }
                    
                    trackCell[[i,j]].push([rightRow,rightCol]);
                }

                let topRow = row-1;
                let topCol = col;
                if (grid[topRow][topCol]==0 && wasVisited[[topRow,topCol]]==false )
                {
                    wasVisited[[topRow,topCol]]=true;
                    queue.push([topRow,topCol]);
                    if (Object.keys(trackCell).length == 0)
                    {
                        trackCell[[i,j]] = [];
                        
                    }
                    
                    trackCell[[i,j]].push([topRow,topCol]);
                }

                let bottomRow = row+1;
                let bottomCol = col;
                if (grid[bottomRow][bottomCol]==0 && wasVisited[[bottomRow,bottomCol]]==false )
                {
                    wasVisited[[bottomRow,bottomCol]]=true;
                    queue.push([bottomRow,bottomCol]);
                    if (Object.keys(trackCell).length == 0)
                    {
                        trackCell[[i,j]] = [];
                        
                    }
                    
                    trackCell[[i,j]].push([bottomRow,bottomCol]);
                }


            }
        }
    }
   }

   //console.log(trackCell);
   for (let i=1; i<rows-1; i++)
   {
    for (let j=1; j<cols-1; j++)
    {
        console.log([i,j],trackCell[[i,j]]);
    }
   }
};

let grid = [[0,0,1,1,0,1,0,0,1,0],
            [1,1,0,1,1,0,1,1,1,0],
            [1,0,1,1,1,0,0,1,1,0],
            [0,1,1,0,0,0,0,1,0,1],
            [0,0,0,0,0,0,1,1,1,0],
            [0,1,0,1,0,1,0,1,1,1],
            [1,0,1,0,1,1,0,0,0,1],
            [1,1,1,1,1,1,0,0,0,0],
            [1,1,1,0,0,1,0,1,0,1],
            [1,1,1,0,1,1,0,1,1,0]];

closedIsland(grid);