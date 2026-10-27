let SubArray_Max_Product_Size_K = function(nums, k)
{
    let n = nums.length;
    let currentProduct = 1;
    for (let i=0; i<k; i++)
    {
        currentProduct = currentProduct * nums[i];
    }
    let maxProduct = currentProduct;

    for (let i=0; i<n-k; i++)
    {
        currentProduct = Math.floor(currentProduct / nums[i]);
        currentProduct = currentProduct * nums[i+k];
        maxProduct = Math.max(maxProduct, currentProduct);
    }
    return maxProduct;
}

let nums = Array(40000).fill(1);
let k = 5000;
let output = SubArray_Max_Product_Size_K(nums, k);
console.log(output);