
let isEqualStrAndAnagram = function(strMap, anagramMap)
{
    for (let [key, val] of strMap)
    {
        if (val != anagramMap.get(key))
        {
            return false;
        }
    }
    return true;
}
let StringHasAnagram = function(str, anagram)
{
    let k = anagram.length;
    let n = str.length;
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
        if (! (str[i] in strMap))
        {
            strMap.set(str[i], 1);
        }
        else
        {
            strMap.set(str[i], strMap.get(str[i])+1);
        }
    }

    if (isEqualStrAndAnagram(strMap, anagramMap))
    {
        return true;
    }

    for (let i=0; i<n-k; i++)
    {
        let removeChar = str[i];
        let addChar = str[i+k];

        strMap.set(removeChar, strMap.get(removeChar)-1);
        if (strMap.get(removeChar) == 0)
        {
            strMap.delete(removeChar);
        }

        if (! strMap.has(addChar))
        {
            strMap.set(addChar, 1);
        }
        else
        {
            strMap.set(addChar, strMap.get(addChar)+1);
        }

        if (isEqualStrAndAnagram(strMap, anagramMap))
        {
            return true;
        }
    }
    return false;

}
let str = "southernly";
let anagram = "nerlysouth";

let output = StringHasAnagram(str, anagram);
console.log(output);