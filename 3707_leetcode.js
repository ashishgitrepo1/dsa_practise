/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let dict = {};
    let frequency = 1;
    for (let char of chars)
    {
        dict[char] = frequency;
        frequency += 1;
    }
    // console.log(dict, dict['y']);
    let n = s.length;
    let prefixSum = Array(n).fill(0);
    for (let i=1; i<n; i++)
    {
        prefixSum[i] = prefixSum[i-1]+dict[s[i-1]];
    }
    let totalScore = 0;
    for (let char of s)
    {
        totalScore += dict[char];
    }
    // console.log(totalScore);
    // console.log(prefixSum);

    for (let i=0; i<n-1; i++)
    {
        let leftSum = prefixSum[i]+dict[s[i]];
        let rightSum = totalScore - leftSum;

        if (leftSum == rightSum)
        {
            return true
        }

    }
    return false;
};

let s = "bace";
let output = scoreBalance(s);

console.log(output);