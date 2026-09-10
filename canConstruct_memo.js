let canConstruct_memo = function(targetWord, wordBank, memo={})
{
    if (targetWord.length == 0)
    {
        return true;
    }
    if (targetWord in memo)
    {
        return memo[targetWord];
    }
    for (let word of wordBank)

        {
            if (targetWord.indexOf(word) == 0)
            {
                let remainingWord = canConstruct_memo(targetWord.slice(word.length),wordBank, memo);
                if (remainingWord == true)
                {
                    memo[targetWord] = true;
                    return memo[targetWord];
                }
            }
        }
memo[targetWord] = false;
return memo[targetWord];

}


let targetWord = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
let wordBank = ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'];

let result = canConstruct_memo(targetWord,wordBank);
console.log(result);