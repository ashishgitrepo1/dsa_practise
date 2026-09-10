let subArrayWithTargetSum = function(arr, targetSum)
{
    let n = arr.length;
    let start = 0; 
    let end = 0;

    while (start<n || end < n)
    {
        let subArr = [];
        for (let i=start; i<=end; i++)
        {
            subArr.push(arr[i]);
        }
        let total = 0;
        for (let num of subArr)
        {
            total = total + num;
        }
        if (total == targetSum)
        {
            return [start, end];
        }
        else if (total < targetSum)
        {
            ++end;
        }
        else if (total > targetSum)
        {
            ++start;
        }
    }
    return [-1,-1];
}
let arr = [3, 1, 4, 9, 2, 1, 7];
let targetSum = 11;

let result = subArrayWithTargetSum(arr, targetSum);
console.log(result);