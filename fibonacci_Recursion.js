let fib = function(n)
{
    //console.log('stack stracee = ',n);
    if (n==0 || n==1)
    {
        return n;
    }

//    return fib(n-1)+fib(n-2);
    let leftTree = fib(n-1);
    let rightTree = fib(n-2);

   return leftTree+rightTree;
}

let result = fib(5);
console.log(result);