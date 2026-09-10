let maxFreq = function(s, maxLetters, minSize, maxSize)
{
    let n = s.length;
    let start = 0;
    let end = 0;

    let subStr = '';
    let subDict = {};
    let dict = {};

    while (start<n && end<n)
    {
        subStr = subStr + s[end];
        if (! (s[end] in subDict))
        {
            subDict[s[end]] = 1;
        }
        else
        {
            subDict[s[end]] = subDict[s[end]] + 1;
            while(subStr.length>maxSize  && Object.keys(subDict).length>maxLetters)
            {
                let removeChar = s[start];
                subDict[removeChar] = subDict[removeChar] - 1;
                if (subDict[removeChar] == 0)
                {
                    delete subDict[removeChar];
                }
                subStr = subStr.slice(start,end+1);
                start++;
            }
        }
        end++;


        if (!(subStr in dict))
        {
            dict[subStr] = 1;
        }
        else
        {
            dict[subStr] = dict[subStr] + 1;
        }
    }
    for (let key in dict)
    {
        console.log(key, dict[key]);
    }
}
let s = "aababcaab";
let maxLetters = 2;
let minSize = 3;
let maxSize = 4;

let result = maxFreq(s, maxLetters, minSize, maxSize);
console.log(result);