let anagramEqual = function(map1, map2)
{
    // console.log('map1, map2 = ',map1, map2, map1.size==map2.size,);
    if (map1.size !== map2.size)
    {
        return false;
    }
    for (let [char, frequency] of map1)
    {
        // console.log(map1.get[char],map2.get[char]);
        // console.log('char, frquency = ',char,frequency, map2.get(char));
        if (map2.get(char) !== frequency)
        {
            return false;
        }
    }
    return true;
}
let sw_CountAnagram = function(str, anagram)
{
    let strMap = new Map();
    let anagramMap = new Map();
    let n = str.length;
    let k = anagram.length;
    let countAnagram = 0;

    for (let i=0; i<k; i++)
    {
        if (! strMap.has(str[i]))
        {
            strMap.set(str[i],1);
        }
        else
        {
            strMap.set(str[i], strMap.get(str[i])+1);
        }
    }
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
    // console.log('anagram = ',anagramMap,strMap, anagramEqual(strMap,anagramMap));
    // console.log(strMap);
    // console.log(anagramMap);
    if (strMap.size==anagramMap.size && anagramEqual(strMap, anagramMap)==true)
    {
        countAnagram = countAnagram + 1;
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
        

        // console.log(strMap);
        

        if (strMap.size==anagramMap.size && anagramEqual(strMap,anagramMap)==true)
        {
            countAnagram += 1;
        }
    }
    return countAnagram;

}

let str = 'gattactat';
// let str = 'cat'
let anagram = 'tag';

let output = sw_CountAnagram(str, anagram);
console.log(output);