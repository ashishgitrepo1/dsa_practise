var kthLargestNumber = function(nums, k) {
    // return "hello W";
    let numsArray = [];
    let trickleUp = function()
    {
        let index = numsArray.length - 1;
        let data = numsArray[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = numsArray[parentIndex];

            if (data < parent)
            {
                break;
            }
            numsArray[index] = parent;
            index = parentIndex;
        }
        numsArray[index] = data;
    }
    
    for (let num of nums)
    {
        numsArray.push(BigInt(num));
        trickleUp();
    }
    console.log(numsArray);
    let trickleDown = function(index)
    {
        let data = numsArray[index];
        let largeIndex;

        while (index < numsArray.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<numsArray.length && numsArray[rightIndex]>numsArray[leftIndex])
            {
                largeIndex = rightIndex;
            }
            else
            {
                largeIndex = leftIndex;
            }
            if (numsArray[largeIndex]==undefined || data>numsArray[largeIndex])
            {
                break;
            }
            numsArray[index] = numsArray[largeIndex];
            index = largeIndex;
        }
        numsArray[index] = data;
        
    }

    let kthLargest;

    for (let i=0; i<k; i++)
    {
        kthLargest = numsArray[0];
        numsArray[0] = numsArray[numsArray.length-1];
        trickleDown(0);
        numsArray.pop();
    }
    return String(kthLargest);
};
let nums = ["683339452288515879","7846081062003424420","4805719838","4840666580043","83598933472122816064","522940572025909479","615832818268861533","65439878015","499305616484085","97704358112880133","23861207501102","919346676","60618091901581","5914766072","426842450882100996","914353682223943129","97","241413975523149135","8594929955620533","55257775478129","528","5110809","7930848872563942788","758","4","38272299275037314530","9567700","28449892665","2846386557790827231","53222591365177739","703029","3280920242869904137","87236929298425799136","3103886291279"];
let k = 3;

let output = kthLargestNumber(nums,k);
console.log(output);

