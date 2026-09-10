var longestPalindrome = function(s) {
    let n = s.length;
    let longestLength = 0;
    let longestStr = '';
    for (let i=0; i<n; i++)
    {
        let left = i;
        let right = i;
        while (left>=0 && right<n && s[left]==s[right])
        {
            let currentLength = right - left + 1;
            if (currentLength > longestLength)
            {
                longestLength = currentLength;
                longestStr = s.slice(left, right+1);
            }
            left -= 1;
            right += 1;
        }

        left = i;
        right = i+1;
        while (left>=0 && right<n && s[left]==s[right])
        {
            let currentLength = right - left + 1;
            if (currentLength > longestLength)
            {
                longestLength = currentLength;
                longestStr = s.slice(left, right+1);
            }
            left -= 1;
            right += 1;
        }


    }
    return longestStr;
};
let s = "babad";
let output = longestPalindrome(s);
console.log(output);