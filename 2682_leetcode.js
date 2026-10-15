/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    if (n == 1)
    {
        return [];
    }
    let circularMap = new Map();
    let circularArr = [];
    circularMap.set(1, 1);
    for (let i=2; i<=n; i++)
    {
        circularMap.set(i, 0);
    }
    //console.log(circularMap);
    let start = 1;
    let inc = 1;
    while (! [...circularMap.values()].includes(2))
    {
        start = start + (inc * k);
        if (start > n)
        {
            start = start % n;
            if (start == 0)
            {
                start = n;
            }
        }
        circularMap.set(start, circularMap.get(start)+1);
        inc += 1;
    }
    //console.log(circularMap);

    for (let i=1; i<=n; i++)
    {
        if (circularMap.get(i) == 0)
        {
            circularArr.push(i);
        }
    }
    return circularArr;
};

let n = 5;
let k = 3;
let output = circularGameLosers(n, k);
console.log(output);