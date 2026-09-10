
let gridTraveler_recursion = function(rows,cols)
{
    if (rows==0 || cols==0)
    {
        return 0;
    }
    if (rows==1 && cols==1)
    {
        return 1;
    }
    let leftTree = gridTraveler_recursion(rows-1,cols);
    let rightTree = gridTraveler_recursion(rows,cols-1);

    return leftTree+rightTree;
}

let rows = 3;
let cols = 2;
let result = gridTraveler_recursion(rows,cols);
console.log(result);