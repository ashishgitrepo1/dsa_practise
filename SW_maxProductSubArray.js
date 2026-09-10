let maxProductSubArray = function(nums,k)
{
    let n = nums.length;
    let maxProduct = 1;
    for (let i=0; i<k; i++)
    {
        maxProduct = maxProduct * nums[i];
    }
    let currentProduct = maxProduct;
    for (let i=0; i<n-k; i++)
    {
        currentProduct = Math.floor(currentProduct/nums[i]);
        currentProduct = currentProduct*nums[i+k];

        if (currentProduct > maxProduct)
        {
            maxProduct = currentProduct;
        }
    }
    return maxProduct;
}
let nums = [60, 20, 10, 90, 50];
let k = 1;

let output = maxProductSubArray(nums,k);
console.log(output);