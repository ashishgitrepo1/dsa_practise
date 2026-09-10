var uniquePaths = function(m, n,) {
    let Solution = function(rows, cols, memo={})
    {
        let key = rows+','+cols;
        if (key in memo)
        {
            return memo[key];
        }
        if (rows==m || cols==n)
        {
            return 0;
        }
        if (rows==m-1 && cols==n-1)
        {
            return 1;
        }

        let leftTree = Solution(rows+1, cols, memo);
        let rightTree = Solution(rows, cols+1, memo);

        memo[key] = leftTree+rightTree;

        return leftTree+rightTree;
    }
    return Solution(0,0);

};

let m = 3;
let n = 2;

let output = uniquePaths(m,n);
console.log(output);

