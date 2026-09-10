let AnagramInStr = function(str, subStr)
{
    let currentdict = {};
    let subDict = {};

    let n = str.length;
    let k = subStr.length;

    let bool = true;

    for (let i=0; i<k; i++)
    {
        if (! (str[i] in currentdict))
        {
            currentdict[str[i]] = 1;
        }
        else
        {
            currentdict[str[i]] = currentdict[str[i]] + 1;
        }
    }

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

    for (let char in currentdict)
    {
        if (! (char in subDict))
        {
            bool = false;
        }
        else if (currentdict[char] != subDict[char])
        {
            bool = false;
        }
    }

    if (bool == true)
    {
        return true;
    }
    

    

    for (let i=0; i<n-k; i++)
    {
        bool = true;
        let removeChar = str[i];
        let addChar = str[i+k];

        currentdict[removeChar] = currentdict[removeChar] - 1;
        if (currentdict[removeChar] == 0)
        {
            delete currentdict[removeChar];
        }

        if (! (addChar in currentdict))
        {
            currentdict[addChar] = 1;
        }
        else
        {
            currentdict[addChar] = currentdict[addChar] + 1;
        }

        console.log(currentdict);

        for (let char in currentdict)
        {
            if (! (char in subDict))
            {
                bool = false;
            }
            else if (currentdict[char] != subDict[char])
            {
                bool = false;
            }
        }
        if (bool == true)
        {
            break;
        }



    }
    if (bool == true)
    {
        return true;
    }
    else
    {
        return false;
    }

}
let str = 'dermatoglyphics';
let subStr = 'red';

let result = AnagramInStr(str, subStr);
console.log(result);