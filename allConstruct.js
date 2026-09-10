let allConstruct = function(target,wordBank)
{
    let arr = [];
    for (let i=0; i<=target.length; i++)
    {
       arr.push([]);
    }
    arr[0] = [[]];
    // console.log(arr);
    // console.log(arr[0].length);
    // console.log(arr[1].length);
    for (let i=0; i<=target.length; i++)
    {
       
            for (let word of wordBank)
            {
                if (target.slice(i,i+word.length) == word)
                {
                    let newArray = arr[i].map(subArray=>[...subArray,word]);
                    // console.log(newArray);
                    arr[i+word.length].push(...newArray);
                }
            }
        
    }

    return arr[target.length];
}
let target = "abcdef";
let wordBank = ["ab","abc","cd","def","abcd","ef","c"];

let result = allConstruct(target,wordBank);
// console.log(result);
for (let item of result)
{
    console.log(item);
}
