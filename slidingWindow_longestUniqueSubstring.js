let longestUniqueSubstring = function(str)
{
    let n = str.length;

    let start = 0;
    let end = 0;
    let dict = {};

    let currentUnique = 0;
    let longestUnique = currentUnique;

    let totalFrequency = function(dict)
    {
        let total = 0;
        for (let key in dict)
        {
            total = total + dict[key];
        }
        return total;
    }

    for (let end=0; end<n; end++)
    {
        if (! (str[end] in dict))
        {
            dict[str[end]] = 1;
            
        }
        else if (str[end] in dict)
        {
            dict[str[end]] = dict[str[end]] + 1;
            while (totalFrequency(dict) > Object.keys(dict).length)
            {
                let removeChar = str[start];
                dict[removeChar] = dict[removeChar] - 1;
                if (dict[removeChar] == 0)
                {
                    delete dict[removeChar];
                }
                start++;
            }


        }
        // console.log(dict);

        currentUnique = Object.keys(dict).length;
        longestUnique = Math.max(longestUnique, currentUnique);


    }
    return longestUnique;
}
let str = 'abcabcqbb';

let result = longestUniqueSubstring(str);
console.log(result);
