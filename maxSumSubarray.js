let arr = [20, 50, 10, 60, 80, 70];

let k = 1;
let n = arr.length;

let currentSum = 0;
for (let i=0; i<k; i++)
{
    currentSum =currentSum+ arr[i];
}
let maxSum = currentSum;
for (let i=0; i < n-k; i++)
{
    currentSum = currentSum - arr[i] + arr[i+k];
    console.log("new sum = ", currentSum);
    maxSum = Math.max(currentSum, maxSum);
    console.log("max sum = ",maxSum);
}
console.log("max sum of subarray = ", maxSum);