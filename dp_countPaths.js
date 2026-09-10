let countPaths = function(grid, rows, cols, memo={})
{
    let key = rows+","+cols;
    if (key in memo)
    {
        return memo[key];
    }
    if (rows==grid.length || cols==grid[0].length || grid[rows][cols]=='x')
    {
        return 0;
    }
    if (rows==grid.length-1 && cols==grid[0].length-1)
    {
        return 1;
    }
    let down = countPaths(grid, rows+1, cols, memo);
    let right = countPaths(grid, rows, cols+1, memo);

    memo[key] = down+right;

    return down+right;
}

let grid = [['o','o'],['o','o']];
let output = countPaths(grid, 0, 0);
console.log(output);