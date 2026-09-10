let hasMatchingCases = function(str)
{

}
let longestNiceSubstring = function(s)
{
    if (s.length == 1)
    {
        return "";
    }
    let sMap = new Map();
    let longestSubstring = 0;

    let start = 0;
    let end = 0;
    let n = s.length;

    for (end=0; end<n; end++)
    {
        let subStr = s.slice(start, end+1);
        while (! hasMatchingCases(subStr))
        {
            
        }
    }

    
}
let s = "YazaAay";
let output = longestNiceSubstring(s);
console.log(output);