let CountAnagramString = function(str, subStr)
{
    let n = str.length;
    let k = subStr.length;

    let currentDict = {};
    let subDict = {};

    let count = 0;

    for (let i=0; i<k; i++)
    {
        if (! (subStr[i] in subDict))
        {
            subDict[subStr[i]] = 1;
        }
        else
        {
            subDict[subStr[i]] = subDict[subStr[i]] + 1;
        }
    }

    for (let i=0; i<k; i++)
    {
        if (! (str[i] in currentDict))
        {
            currentDict[str[i]] = 1;
        }
        else
        {
            currentDict[str[i]] = currentDict[str[i]] + 1;
        }
    }

    let bool = true;
    for (let char in currentDict)
    {
        if (! (char in subDict))
        {
            bool = false;
        }
        else if (currentDict[char] != subDict[char])
        {
            bool = false;
        }
    }
    if (bool == true)
    {
        count++;
    }

    for (let i=0; i<n-k; i++)
    {
        bool = true;

        let removeChar = str[i];
        let addChar = str[i+k];

        currentDict[removeChar] = currentDict[removeChar] - 1;
        if (currentDict[removeChar] == 0)
        {
            delete currentDict[removeChar];
        }

        if (! (addChar in currentDict))
        {
            currentDict[addChar] = 1;
        }
        else
        {
            currentDict[addChar] = currentDict[addChar] + 1;
        }

        for (let char in currentDict)
        {
            if (! (char in subDict))
            {
                bool = false;
                break;
            }
            else if (currentDict[char] != subDict[char])
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
let str = 'tacoctacabcatt';
let subStr = 'cat';

let result = CountAnagramString(str, subStr);
console.log(result);