var uniquePathsWithObstacles = function(obstacleGrid) {
    let Solution = function(obstacleGrid, rows, cols, memo={})
    {
        let key = rows+","+cols;
        if (key in memo)
        {
            return memo[key];
        }
        if (rows==obstacleGrid.length || cols==obstacleGrid[0].length || obstacleGrid[rows][cols]==1)
        {
            return 0;
        }
        if (rows==obstacleGrid.length-1 && cols==obstacleGrid[0].length-1)
        {
            return 1;
        }
        let downTree = Solution(obstacleGrid, rows+1, cols, memo);
        let rightTree = Solution(obstacleGrid, rows, cols+1, memo);
        
        memo[key] = downTree+rightTree;
        return downTree + rightTree;
    }


    return Solution(obstacleGrid, 0,0);
};

let obstacleGrid = [[0,0]];
let output = uniquePathsWithObstacles(obstacleGrid);
console.log(output);
