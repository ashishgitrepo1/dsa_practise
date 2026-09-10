let countConstruct_recursion = function(targetWord, wordBank)
{
    if (targetWord.length == 0)
    {
        return 1;
    }
    let totalCountConstruct = 0;

    for (let word of wordBank)
    {
        if (targetWord.indexOf(word) == 0)
        {
            let numCountConstruct = countConstruct_recursion(targetWord.slice(word.length),wordBank);
            totalCountConstruct = totalCountConstruct + numCountConstruct;
            // return totalCountConstruct;
        }
    }
    return totalCountConstruct;
}

let targetWord = 'enterapotentpot';
let wordBank = ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'];

let result = countConstruct_recursion(targetWord, wordBank);
console.log(result);