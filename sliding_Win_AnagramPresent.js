let checkEquality = function(strMap, subMap)
{
    if (strMap.size == subMap.size)
    {
        for (let [key, value] of strMap)
        {
            if (! subMap.has(key))
            {
                return false;
            }
            else if (subMap.has(key))
            {
                if (value != subMap.get(key))
                {
                    return false;
                }
            }
        }
    }
    return true;
}
let AnagramPresentInStr = function(str,subStr)
{
    let subMap = new Map();
    for (let char of subStr)
    {
        if (! subMap.has(char))
        {
            subMap.set(char,1);
        }
        else
        {
            subMap.set(char, subMap.get(char)+1);
        }
    }
    // console.log(subMap);
    let n = str.length;
    let k = subStr.length;

    let strMap = new Map();
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
    // console.log(strMap);

    

    

    if (checkEquality(strMap, subMap))
    {
        return true;
    }

    for (let i=0; i<n-k; i++)
    {
        // console.log(str[i], strMap.get(str[i]));
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

        // console.log(strMap);
        // console.log(subMap);

        if (checkEquality(strMap, subMap))
        {
            return true;
        }
    }
    
    return false;

}

let str = 'dermatoglyphics';
let subStr = 'red';

let output = AnagramPresentInStr(str, subStr);
console.log(output);