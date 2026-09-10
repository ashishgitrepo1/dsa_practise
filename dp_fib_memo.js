

let dp_fib = function(n,memo={})
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
        return 1;
    }
    let leftTree = dp_fib(n-1,memo);
    let rightTree = dp_fib(n-2,memo);

    memo[n] = leftTree+rightTree;
    // console.log(memo);
    return leftTree+rightTree;
}

let n = 46;
let result = dp_fib(n);
console.log(result);