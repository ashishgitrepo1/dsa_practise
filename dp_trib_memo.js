let dp_trib = function(n, memo={})
{
    if (n in memo)
    {
        return memo[n];
    }
    if (n == 0)
    {
        return 0;
    }
    if (n == 1)
    {
        return 0;
    }
    if (n == 2)
    {
        return 1;
    }
    let leftTree = dp_trib(n-1,memo);
    let midTree = dp_trib(n-2,memo);
    let rightTree = dp_trib(n-3,memo);

    memo[n] = leftTree + midTree + rightTree;
    return memo[n];
}

let n = 37;
let result = dp_trib(n);
console.log(result);