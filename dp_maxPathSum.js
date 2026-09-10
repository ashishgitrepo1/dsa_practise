let maxPathSum = function(grid, rows, cols, memo = {})
{
    let key = rows+','+cols;
    if (key in memo)
    {
        return memo[key];
    }
    if (rows==grid.length || cols==grid[0].length)
    {
        return 0;
    }
    if (rows==grid.length-1 && cols==grid[0].length-1)
    {
        return grid[rows][cols];
    }
    let down = maxPathSum(grid,rows+1, cols, memo);
    let right = maxPathSum(grid, rows, cols+1, memo);
    memo[key] = grid[rows][cols]+Math.max(down,right);
    return grid[rows][cols]+Math.max(down, right);

}


let grid = [
    [1, 2, 8, 1],
    [3, 10, 12, 10],
    [4, 0, 6, 3]
];

let output = maxPathSum(grid, 0, 0);
console.log(output);