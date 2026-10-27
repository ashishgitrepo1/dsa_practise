/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let currentProduct = 1;
    let subArrayCount = 0;

    for (right=0; right<n; right++)
    {
        currentProduct *= nums[right];
        // console.log("main product = ",currentProduct);
        while (currentProduct >= k)
        {
            currentProduct = Math.floor(currentProduct/nums[left]);
            // console.log("product = ",currentProduct);
            left += 1;
            if (currentProduct < nums[left])
            {
                break;
            }
        }
        let currentWindow = right-left+1;
        if (currentProduct < k)
        {
            // console.log("product less than k");
            // console.log("left, right, window, product = ",left, right, currentWindow, currentProduct);
            subArrayCount += currentWindow;
        }
    }
    return subArrayCount;
};

let nums = [7,2,7,8,6];
let k = 1;

let output = numSubarrayProductLessThanK(nums, k);
console.log(output);