
let minimumSquare = function(n,memo={})
{
    
    if (n in memo)
    {
        return memo[n];
    }
    if (n==0)
    {
        return 0;
    }
    // if (n<0)
    // {
    //     return Infinity;
    // }
    let minSquare = Infinity;
    for (let i=1; i<Math.floor(Math.sqrt(n))+1; i++)
    {
        // let square = i*i;
       
        let remainingSquare = 1+minimumSquare(n-(i*i),memo);
        if (remainingSquare < minSquare)
        {
            minSquare = remainingSquare ;
        }
        // console.log(n,memo);
    }
    // console.log(n,memo[n]);
    // console.log('out of for loop');
    memo[n] = minSquare;
    
    return minSquare;
}
let n = 12;
let result = minimumSquare(n);
console.log(result);