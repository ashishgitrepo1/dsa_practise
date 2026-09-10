let canConstruct = function(target,wordBank)
{
    let arr = [];
    for (let i=0; i<=target.length; i++)
    {
        arr[i] = false;
    }
    arr[0] = true;
    for (let i=0; i<=target.length; i++)
    {
        if (arr[i] == true)
        {
            for (let word of wordBank)
            {
                if (i+word.length <= target.length)
                {
                    if (target.slice(i,i+word.length) == word)
                    {
                        arr[i+word.length] = true;
                    }
                }
                
            }
        }
    }
    return arr[target.length];
}
let target = "abcdef";
let wordBank = ["ab","abc","cd","def","abcd"];
let result = canConstruct(target,wordBank);
console.log(result);