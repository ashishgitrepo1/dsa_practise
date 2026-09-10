let bestSum = function(target,nums)
{
    let arr = [];
    for (let i=0; i<=target; i++)
    {
        arr[i] = null;
    }
    arr[0] = [];
    for (let i=0; i<=target; i++)
    {
        if (arr[i] != null)
        {
            for (let num of nums)
            {
                let newArr = [...arr[i],num];
                if (i+num <= target)
                {
                    if (arr[i+num] == null)
                    {
                        arr[i+num] = [...arr[i],num];
                    }
                    else if (arr[i+num].length > newArr.length)
                    {
                        arr[i+num] = [...newArr];
                    }
                }
            }
        }
    }
    return arr[target];
}
let target = 8;
let nums = [1,4,5];

let result = bestSum(target,nums);
console.log(result);