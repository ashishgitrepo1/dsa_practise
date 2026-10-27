let LongestUniqueSubstring = function(str)
{
    let n = str.length;
    let LongestSubstring = -Infinity;
    let left = 0;
    let right = 0;
    let strMap = new Map();

    for (right=0; right<n; right++)
    {
        //console.log(strMap);
        let char = str[right];
        if (! strMap.has(char))
        {
            strMap.set(char, 1);
        }
        else
        {
            strMap.set(char, strMap.get(char)+1);
            let currentWindowSize = right - left + 1;
            // console.log("left, right,Window,map = ", left, right, currentWindowSize, strMap);
            while (currentWindowSize > strMap.size)
            {
                // let deleteChar = strMap.keys().next().value;
                let deleteChar = str[left];
                strMap.set(deleteChar, strMap.get(deleteChar)-1);
                if (strMap.get(deleteChar) == 0)
                {
                    strMap.delete(deleteChar);
                }
                left += 1;
                currentWindowSize -= left;
                
                
            }
            
           
        }
        LongestSubstring = Math.max(LongestSubstring, strMap.size);
        

    }
    return LongestSubstring;


}
let str = "zqzzzz";
let output = LongestUniqueSubstring(str);
console.log(output);