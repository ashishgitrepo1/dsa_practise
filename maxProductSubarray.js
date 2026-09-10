let arr = [60, 20, 10, 90, 50];
let k = 1;
let n = arr.length;
let currentProduct = 1;
for (let i=0; i<k; i++)
{
    currentProduct = currentProduct * arr[i];
}
let maxProduct = currentProduct;
for (let i=0; i<n-k; i++)
{
    currentProduct = Math.floor(currentProduct / arr[i]);
    currentProduct = Math.floor(currentProduct * arr[i+k]);


    maxProduct = Math.max(maxProduct,currentProduct);
}
console.log("max product = ", maxProduct);

