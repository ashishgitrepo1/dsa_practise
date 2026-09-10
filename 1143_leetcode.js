var longestCommonSubsequence = function(text1, text2) {
    let Solution = function(i, j, memo={})
    {
        let key = i+','+j;
        if (key in memo)
        {
            return memo[key];
        }
        if (i==text1.length || j==text2.length)
        {
            return 0;
        }
        if (text1[i] == text2[j])
        {
            memo[key] = 1 + Solution(i+1,j+1, memo);
            return 1+Solution(i+1, j+1,memo);
        }
        if (text1[i] != text2[j])
        {
            memo[key] = Math.max(Solution(i+1, j, memo), Solution(i,j+1, memo))
            return Math.max(Solution(i+1, j, memo), Solution(i,j+1, memo));
        }
    }
    return Solution(0,0);
};

let text1 = "abcde";
let text2 = "ace";

let output = longestCommonSubsequence(text1, text2);
console.log(output);
