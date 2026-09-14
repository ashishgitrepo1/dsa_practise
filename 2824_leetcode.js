var countPairs = function(nums, target) {
    // console.log(nums);
    let pairs = 0;
    let Swap = function(left, right)
    {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
    }
    let getPartition = function(left,right, pivot)
    {
        let leftPtr = left;
        let rightPtr = right-1;

        while (true)
        {
            while (nums[leftPtr]<pivot)
            {
                leftPtr += 1;
            }
            while (nums[rightPtr]>=pivot)
            {
                rightPtr -= 1
            }
            if (leftPtr < rightPtr)
            {
                Swap(leftPtr, rightPtr)
            }
            else
            {
                break;
            }
        }
        Swap(leftPtr, right);
        return leftPtr;
    }
    let QuickSort = function(left, right)
    {
        if (right-left<=0)
        {
            return;
        }
        else
        {
            let pivot = nums[right];
            let partition = getPartition(left,right,pivot)
            QuickSort(left, partition-1)
            QuickSort(partition+1, right)
        }
    }
    QuickSort(0, nums.length-1);
    console.log(nums);

    let left = 0;
    let right = nums.length - 1;

    while (left <= right)
    {
        
        if ((nums[left]+nums[right]) >= target)
        {
            // console.log("greater");
            --right;
        }
        else if ((nums[left]+nums[right]) < target)
        {

            pairs += (right-left);
            ++left;
        }
    }
    return pairs;
};

let nums = [9,-5,-5,5,-5,-4,-6,6,-6];
let target = 3;

console.log(countPairs(nums, target));