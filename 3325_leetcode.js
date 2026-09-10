let kFrequency = function(sMap,k)
{
    for (let [key, value] of sMap)
    {
        if (value>=k)
        {
            return true;
        }
    }
    return false;
}
let numberOfSubstrings = function(s,k)
{
    let n = s.length - 1;
    let left = 0;
    let right = 0;
    let sMap = new Map();
    let countSubString = 0;

    for (right=0; right<=n; right++)
    {
        if (! sMap.has(s[right]))
        {
            sMap.set(s[right], 1);
        }
        else
        {
            sMap.set(s[right], sMap.get(s[right])+1);
        }

        if(kFrequency(sMap,k) == true)
        {
            countSubString += (n-right+1);
            sMap.set(s[left], sMap.get(s[left])-1);
            if (sMap.get(s[left]) == 0)
            {
                sMap.delete(s[left]);
            }
        }
    }
    return countSubString;

}

let s = "abcde";
let k = 1;
let output = numberOfSubstrings(s, k);
console.log(output);