
let containsAnagram = function(str, subStr)
{
    let n = str.length;
    let k = subStr.length;
    let bool = false;

    let subDict = {};
    for (let char of subStr)
    {
        if (! (char in subDict))
        {
            subDict[char] = 1;
        }
        else
        {
            subDict[char] = subDict[char] + 1;
        }
    }
    // console.log(subDict);

    for (let i=0; i<=n-k; i++)
    {
        let arr = [...str.slice(i,i+k)];
        // console.log(arr);
        let dict = {};
        
        for (let j=0; j<arr.length; j++)
        {
            if (! (arr[j] in dict))
            {
                dict[arr[j]] = 1;
            }
            else
            {
                dict[arr[j]] = dict[arr[j]] + 1;
            }
        }
        console.log(dict);

        let checkChar = Object.keys(dict).length;
        // console.log(checkChar);

        let temp = 0;

        for (let char in dict)
        {
           if (dict[char] == subDict[char])
           {
            temp++;
           }
        }
        if (checkChar == temp)
        {
            bool = true;
            break;
        }

    }
    return bool;

}

let str = "dermatoglyphics";
let subStr = 'red';
//greyhounds
//hoy
let result = containsAnagram(str, subStr);
console.log(result);

