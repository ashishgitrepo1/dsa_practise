let gridTraverler_memo = function(rows,cols, memo={})
{
    let key = rows+','+cols;
    if (key in memo)
    {
        return memo[key];
    }
    if (rows==0 || cols==0)
    {
        return 0;
    }
    if (rows==1 && cols==1)
    {
        return 1;
    }
    let leftTree = gridTraverler_memo(rows-1,cols,memo);
    let rightTree = gridTraverler_memo(rows,cols-1,memo);

    memo[key] = leftTree+rightTree;
    return memo[key];
}
let rows = 18;
let cols = 18;
let result = gridTraverler_memo(rows,cols);
console.log(result);