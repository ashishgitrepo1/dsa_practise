let subArrMaxProd = function(nums, k)
{
    let n = nums.length;
    let currentProd = 1;
    for (let i=0; i<k; i++)
    {
        currentProd = currentProd * nums[i];
    }
    let maxProd = currentProd;

    for (let i=0; i<n-k; i++)
    {
        currentProd = Math.floor(currentProd/nums[i]);
        currentProd = currentProd*nums[i+k];

        maxProd = Math.max(maxProd, currentProd);
    }
    return maxProd;
}
let nums = [60, 20, 10, 90, 50];
let k = 1;

let result = subArrMaxProd(nums,k);
console.log(result);