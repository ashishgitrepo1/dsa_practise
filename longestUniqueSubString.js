let str = "abcabcqbb";


let longestUniqueSubString = function(str)
{
    let n = str.length;
    let longestUniqueStr = -1;
    let start = 0;
    let end = 0;
   

    while (end < n)
    {
        let subArr = [];
        let dict = {};
        

        for (let i=start; i<=end; i++)
        {
            subArr.push(str[i]);

        }
        // console.log(subArr);
        for (let char of subArr)
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
        // console.log(dict);
        let totalValues = 0;
        for (let char in dict)
        {
            totalValues = totalValues + dict[char];
        }
        
        // console.log(totalValues);
        if (Object.keys(dict).length == totalValues)
        {
            end++;
            longestUniqueStr = Math.max(longestUniqueStr, Object.keys(dict).length);
        }

        else if (totalValues > Object.keys(dict).length)
        {
            start++;
            // for (let char in dict)
            // {
            //     if (dict[char] > 1)
            //     {
            //         dict[char] = dict[char] - 1;
            //         if (dict[char] == 0)
            //         {
            //             delete dict[char];
            //         }
            //     }
            // }
        }
        // console.log("longest unique string = ",longestUniqueStr);
        
    }
    return longestUniqueStr;

}
let result = longestUniqueSubString(str);
console.log(result);