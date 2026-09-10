
let countConstruct_memo = function(targetWord,wordBank,memo={})
{
    if (targetWord in memo)
    {
        return memo[targetWord];
    }
    if (targetWord.length == 0)
    {
        return 1;
    }
    let totalCountConstruct = 0;

    for (let word of wordBank)
    {
        if (targetWord.indexOf(word) == 0)
        {
            let countRemainingWord = countConstruct_memo(targetWord.slice(word.length),wordBank,memo);
            totalCountConstruct = totalCountConstruct + countRemainingWord;
            memo[targetWord] = totalCountConstruct;

        }
    }
    memo[targetWord] = totalCountConstruct;
    return memo[targetWord];
}

let targetWord = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
let wordBank = ['e','ee','eee','eeee','eeeee','eeeeee'];

let result = countConstruct_memo(targetWord, wordBank);
console.log(result);