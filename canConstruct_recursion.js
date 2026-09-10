let canConstruct_recursion = function(targetWord, wordBank)
{
    if (targetWord .length == 0)
    {
        return true;
    }

    for (let word of wordBank)
    {
        if (targetWord.indexOf(word) == 0)
        {
            let remainingWord = canConstruct_recursion(targetWord.slice(word.length),wordBank);
            if (remainingWord == true)
            {
                return true;
            }
        }
    }



    return false;
}

let word = 'enterapotentpot';
let wordBank = ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'];

let result = canConstruct_recursion(word,wordBank);
console.log(result);