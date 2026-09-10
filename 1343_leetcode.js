let numOfSubarrays = function(arr, k, threshold)
{
    let currentSum = 0;
    for (let i=0; i<k; i++)
    {
        currentSum += arr[i];
    }
    let maxSum = currentSum;

    let currentAvg = maxSum/k;

    let numSubArrays = 0;
    if (currentAvg >= threshold)
    {
        numSubArrays += 1;
    }

    let n = arr.length;
    for (let i=0; i<n-k; i++)
    {
        currentSum -= arr[i];
        currentSum += arr[i+k];

        // console.log(currentSum);

        if (currentSum/k >= threshold)
        {
            numSubArrays += 1;
        }

        // if (currentSum > maxSum)
        // {
        //     maxSum = currentSum;
        //     if (maxSum/k > threshold)
        //     {
        //         numSubArrays += 1;
        //     }
        // }
    }
    return numSubArrays;
}

let arr = [11,13,17,23,29,31,7,5,2,3];
let k = 3;
let threshold = 5;

let output = numOfSubarrays(arr, k, threshold);
console.log(output);