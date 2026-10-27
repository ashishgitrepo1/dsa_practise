let isEqualStrAndAnagram = function(strMap, anagramMap)
{
    for (let [key, val] of strMap)
    {
        if (! anagramMap.has(key))
        {
            return false;
        }
        else if (anagramMap.has(key) && val!=anagramMap.get(key))
        {
            return false;
        }
    }
    return true;
}
let CountAnagramsInString = function(str, angagram)
{
    let n = str.length;
    let k = anagram.length;
    let countAnagram = 0;

    let anagramMap = new Map();
    let strMap = new Map();

    for (let char of anagram)
    {
        if (! anagramMap.has(char))
        {
            anagramMap.set(char, 1);
        }
        else
        {
            anagramMap.set(char, anagramMap.get(char)+1);
        }
    }

    for (let i=0; i<k; i++)
    {
        let char = str[i];
        if (! strMap.has(char))
        {
            strMap.set(char, 1);
        }
        else
        {
            strMap.set(char, strMap.get(char)+1);
        }
    }

    if (isEqualStrAndAnagram(strMap,anagramMap))
    {
        countAnagram += 1;
    }

    for (let i=0; i<n-k; i++)
    {
        let deleteChar = str[i];
        let addChar = str[i+k];

        strMap.set(deleteChar, strMap.get(deleteChar)-1);
        if (strMap.get(deleteChar) == 0)
        {
            strMap.delete(deleteChar);
        }

        if (! strMap.has(addChar))
        {
            strMap.set(addChar, 1);
        }
        else
        {
            strMap.set(addChar, strMap.get(addChar)+1);
        }

        if (isEqualStrAndAnagram(strMap,anagramMap))
        {
            countAnagram += 1;
        }
    }
    return countAnagram;

}

let str = "versorevairlg";
let anagram = "serve";

let output = CountAnagramsInString(str, anagram);
console.log(output);