/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;
    let arr = [];
    for (let i=1; i<=n; i++)
    {
        arr.push(i);
    }
    for (let i=0; i<n; i++)
    {
        let items = matrix[i];
        for (num of arr)
        {
            if (! items.includes(num))
            {
                return false;
            }
        }
    }
    
    for (let i=0; i<n; i++)
    {
        let colArr = [];
        for (let j=0; j<n; j++)
        {
            colArr.push(matrix[j][i]);
        }
        for (let num of arr)
        {
            if (! colArr.includes(num))
            {
                return false;
            }
        }
    }
    return true;
};