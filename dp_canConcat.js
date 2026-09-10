let canConcat = function(targetWord, wordBank, memo={})
{
    if (targetWord in memo)
    {
        return memo[targetWord];
    }
    if (targetWord.length == 0)
    {
        return true;
    }
    for (let word of wordBank)
    {
        if (targetWord.indexOf(word) == 0)
        {
            if (canConcat(targetWord.slice(word.length),wordBank) == true)
            {
                memo[targetWord] = true;
                return true;
            }
        }
    }
    memo[targetWord] = false;
    return false;
}

let targetWord = 'oneisnone';
let wordBank = ['on', 'e', 'is'];

let output = canConcat(targetWord, wordBank);
console.log(output);