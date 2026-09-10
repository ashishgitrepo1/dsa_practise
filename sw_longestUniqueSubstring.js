let longestUniqueSubstring = function(str)
{
    let n = str.length
    let start = 0;
    let end = 0;

    let uniqueLength = 0;
    let strMap = new Map();
    for (end=0; end<n; end++)
    {
        console.log(strMap);
        if (! strMap.has(str[end]))
        {
            strMap.set(str[end],1);
        }
        else
        {
            strMap.set(str[end], strMap.get(str[end])+1);
            while (strMap.get(str[end])>1)
            {
                strMap.set(str[start], strMap.get(str[start])-1);
                
                if (strMap.get(str[start]) == 0)
                {
                    strMap.delete(str[start]);
                    // start+=1;
                }
                start = start + 1;
                
            }
        }
        if (strMap.size > uniqueLength)
        {
            uniqueLength = strMap.size;
        }
    }
    // console.log(strMap);
    return uniqueLength;
}

let str = 'racecarisgreatness';

let output = longestUniqueSubstring(str);
console.log(output);