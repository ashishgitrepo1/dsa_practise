let checkEquality = function(strMap, subStrMap)
{
    if (strMap.size == subStrMap.size)
    {
        for (let [key, value] of strMap)
        {
            if (! subStrMap.has(key))
            {
                return false;
            }
            else
            {
                if (value != subStrMap.get(key))
                {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}

let CountAnagrams = function(str, subStr)
{
    let subStrMap = new Map();
    let strMap = new Map();

    let n = str.length;
    let k = subStr.length;

    for (let i=0; i<k; i++)
    {
        if (! subStrMap.has(subStr[i]))
        {
            subStrMap.set(subStr[i], 1);
        }
        else
        {
            subStrMap.set(subStr[i], subStrMap.get(subStr[i])+1);
        }
    }
    console.log(subStrMap);

    for (let i=0; i<k; i++)
    {
        if (! strMap.has(str[i]))
        {
            strMap.set(str[i], 1);
        }
        else
        {
            strMap.set(str[i], strMap.get(str[i])+1);
        }
    }
    console.log(strMap);
    let totalAnagram = 0;
    if (checkEquality(strMap, subStrMap))
    {
        totalAnagram += 1;
    }
    for (let i=0; i<n-k; i++)
    {
        strMap.set(str[i], strMap.get(str[i])-1);
        if (strMap.get(str[i]) == 0)
        {
            strMap.delete(str[i]);
        }
        if (! strMap.has(str[i+k]))
        {
            strMap.set(str[i+k], 1);
        }
        else
        {
            strMap.set(str[i+k], strMap.get(str[i+k])+1);
        }

        if (checkEquality(strMap, subStrMap))
        {
            totalAnagram += 1;
        }
    }
    return totalAnagram;
}

let str = 'tacoctacabcatt';
let subStr = 'cat';

let result = CountAnagrams(str, subStr);
console.log(result);