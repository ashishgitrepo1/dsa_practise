let longestUniqueSubStr = function(str)
{

    let totalLength = function(dict)
    {
        let total = 0;
        for (let key in dict)
        {
            total = total + dict[key];
        }
        return total;
    }
    let n = str.length;
    let start = 0;
    let end = 0;


    let dict = {};
    let subStr = '';

    let uniqueDict = {};

    for (end=0; end<n; end++)
    {
        subStr = str.slice(start,end+1);

        if (! (str[end] in dict))
        {
            dict[str[end]] = 1;
        }
        else
        {
            dict[str[end]] = dict[str[end]] + 1;
            while (totalLength(dict) > Object.keys(dict).length)
            {
                // console.log('string before removal = ',subStr);
                // console.log('start, end = ',start, end);
                let removChar = str[start];
                // console.log('removed char = ',removChar);
                dict[removChar] = dict[removChar] - 1;
                if (dict[removChar] == 0)
                {
                    delete dict[removChar];
                }
                start++;
                subStr = str.slice(start,end+1);
                // console.log('string after removal = ',subStr);
               
                
            }
           

        }

        uniqueDict[subStr] = subStr.length;
        

        

    }
    let longest = Math.max(...Object.values(uniqueDict));
    for (let str in uniqueDict)
    {
        if (uniqueDict[str] == longest)
        {
            return str;
        }
    }
}
let str = 'abcabcqbb';
let result = longestUniqueSubStr(str);
console.log(result);