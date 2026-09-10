let arr = [2, 3, 2];
let n = arr.length;
let target = 7; 
let k = 3;
let count = 0;

let currentSum = 0;
for (let i=0; i<k; i++)
{
    currentSum = currentSum + arr[i];
}
if (currentSum == target)
{
    count++;
}
for (let i=0; i<n-k; i++)
{
    currentSum = currentSum - arr[i] + arr[i+k];
    if (currentSum == target)
    {
        count++;
    }
}
console.log("number of subarry with sum = target = ", count);