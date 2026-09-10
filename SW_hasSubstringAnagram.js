let hasSubStringAnagram = function(str, anagram)
{
    let n = str.length;
    let k = anagram.length;
    let set1 = new Set();
    let set2 = new Set();

    for (let char of anagram)
    {
        set2.add(char);
    }
    for (let i=0; i<k; i++)
    {
        set1.add(str[i]);
    }
    // console.log(set1,set2);
    if ((set1.size==set2.size) && set1.isSubsetOf(set2))
    {
        return true;
    }
    for (let i=0; i<n-k; i++)
    {
        set1.delete(str[i]);
        set1.add(str[i+k]);
        // console.log(set1,set2);
        if ((set1.size==set2.size) && set1.isSubsetOf(set2))
        {
            return true;
        }

    }
    return false;
    
}
let str = "dermatoglyphics";
let anagram = "red";

let output = hasSubStringAnagram(str,anagram);
console.log(output);