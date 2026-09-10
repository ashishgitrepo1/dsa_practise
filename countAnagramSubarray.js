
let Solution = function(str, subStr)
{
    let n = str.length;
    let k = subStr.length;
    let count = 0;
    let subDict = {};

    for (let char of subStr)
    {
        if (!(char in subDict))
        {
            subDict[char] = 1;
        }
        else
        {
            subDict[char] = subDict[char] + 1;
        }
    }
    console.log("sub str dict = ",subDict);

    let currentArr = [...str.slice(0,k)];
    // console.log("initial sub array = ",currentArr);
    let dict = {};
    for (let i=0; i<currentArr.length; i++)
    {
        if (! (currentArr[i] in dict))
        {
            dict[currentArr[i]] = 1;
        }
        else
        {
            dict[currentArr[i]] = dict[currentArr[i]] + 1;
        }
    }
    
    let bool = false;
    let temp = 0;

    for (let char in subDict)
    {
        if (subDict[char] == dict[char])
        {
            temp++;
        }
    }
    if (Object.keys(dict).length == temp)
    {
        bool = true;
    }
    if (bool == true)
    {
        count++;
    }

    //now use the sliding window logic
    for (let i=0; i<n-k; i++)
    {
        currentArr.shift();
        currentArr.push(str[i+k]);
        // console.log("subarray = ",currentArr);

        dict = {};

        for (let char of currentArr)
        {
            if (! (char in dict))
            {
                dict[char] = 1;
            }
            else
            {
                dict[char] = dict[char] + 1;
            }
        }
        console.log("str dict = ",dict);
        bool = true;
        for (let char in dict)
        {
            if (dict[char] != subDict[char])
            {
                bool = false;
                break;
            }
        }
        if (bool == true)
        {
            count++;
        }
    }
    return count;
}
let str = "tacoctacabcatt";
let subStr = "cat";


let result = Solution(str, subStr);
console.log(result);