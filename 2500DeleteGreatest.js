var deleteGreatestValue = function(grid) {
    // return "delete greatest";
    let rows = grid.length;
    let cols = grid[0].length;

    let wasVisited = {};
    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            wasVisited[[i,j]] = false;
        }
    }
    console.log(wasVisited);
    
};
let grid = [[1,2,4],[3,3,1]];
let output = deleteGreatestValue(grid);
console.log(output);
