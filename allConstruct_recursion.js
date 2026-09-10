
let allConstruct_recursion = function(targetWord, wordBank)
{
    if (targetWord.length == 0)
    {
        return [[]];
    }
    let result = [];

    for (let word of wordBank)
    {
        if (targetWord.indexOf(word) == 0)
        {
            let remainingWord = allConstruct_recursion(targetWord.slice(word.length),wordBank);
            

            let newWord = remainingWord.map(way => [word, ...way]);
            // console.log(...newWord);
            result.push(...newWord);
            // return result;
        }
    }
    
    // console.log(...result);
    return result;
}

let targetWord = 'purple';
let wordBank = ['purp', 'p', 'ur', 'le', 'purpl'];
let result = allConstruct_recursion(targetWord, wordBank);
console.log(...result);