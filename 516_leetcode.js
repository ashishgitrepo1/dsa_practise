var longestPalindromeSubseq = function(s) {
    let Solution = function(left, right)
    {
        if (left==right)
        {
            return 1;
        }
        if (left+1 == right)
        {
            if (s[left] == s[right])
            {
                return 2;
            }
            else if (s[left] != s[right])
            {
                return 1;
            }
        }
        if (s[left] == s[right])
        {
            return Solution(left+1, right-1)+2;
        }
        else
        {
            return Math.max(Solution(left, right-1), Solution(left+1, right));
        }
    }
    return Solution(0, s.length-1);
};
let s = "cbbd";
let output = longestPalindromeSubseq(s);
console.log(output);
