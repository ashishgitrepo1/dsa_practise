let numberOfSubstrings = function(s)
{
    let n = s.length - 1;
    let left = 0;
    let right = 0;
    let sMap = new Map();
    let totalStrings = 0;

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
        // console.log('right out of loop = ',right);
        while (sMap.size >= 3)
        {
            // console.log('right = ', right);
            totalStrings += (n-right+1);
            sMap.set(s[left], sMap.get(s[left])-1);

            if (sMap.get(s[left]) == 0)
            {
                sMap.delete(s[left]);

            }
            left += 1;
        }
    }
    return totalStrings;
}
let s = "abc";
let output = numberOfSubstrings(s);
console.log(output);