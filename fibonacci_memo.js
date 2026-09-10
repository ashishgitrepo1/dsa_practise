let fib_memo = function(n, memo={})
{
    console.log(n,memo);
    if (n in memo)
    {
        return memo[n];
    }
    if (n==0 || n==1)
    {
        return n;
    }
    let leftTree = fib_memo(n-1,memo);
    let rightTree = fib_memo(n-2,memo);

    memo[n] = leftTree+rightTree;

    
    return memo[n];
}

let result = fib_memo(5);
console.log(result);