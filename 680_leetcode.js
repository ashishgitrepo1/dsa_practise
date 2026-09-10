
var validPalindrome = function(s) {
    let isPalindrome = function(l,  r)
    {
        while (l < r)
        {
            if (s[l] != s[r])
            {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    }
    let left = 0;
    let right = s.length-1;
    
    while (left < right)
    {
        if (s[left] != s[right])
        {
            return isPalindrome(left, right-1) || isPalindrome(left+1, right);
        }
        // else if (s[left] == s[right])
        // {
        //     return isPalindrome(left+1, right-1);
        // }
        left += 1;
        right -= 1;
    }
    return true;
};
let s = "aba";
let output = validPalindrome(s);
console.log(output);
