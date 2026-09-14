var answerQueries = function(nums, queries) {

    let answers = [];
    // console.log(nums);

    let Swap = function(left,right)
    {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
    }

    let getPartition = function(left, right, pivot)
    {
        let leftPtr = left;
        let rightPtr = right-1;

        while (true)
        {
            while (nums[leftPtr] < pivot)
            {
                leftPtr += 1;
            }
            while (nums[rightPtr] >= pivot)
            {
                rightPtr -= 1;
            }
            if (leftPtr > rightPtr)
            {
                break;
            }
            else
            {
                Swap(leftPtr, rightPtr);
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
            let partition = getPartition(left, right, pivot);
            QuickSort(left, partition-1);
            QuickSort(partition+1, right);
        }
    }
    QuickSort(0,nums.length-1);
    // console.log(nums);

    for (let query of queries)
    {
        console.log(query);
        let i = 0;
        let numCount = 0;
        let queryCount = 0;

        for (let num of nums)
        {
            if (numCount<=query)
            {
                numCount += num;
                queryCount += 1;
                if (numCount > query)
                {
                    queryCount -= 1;
                }
            }
            else if (numCount > query)
            {
                break;
            }
        }
        answers.push(queryCount);
        // console.log(numCount, queryCount);
        

    }
    return answers;
    
};

let nums = [2,3,4,5];
let queries = [1];

let output = answerQueries(nums, queries);
console.log(output);


