var topKFrequent = function(words, k) {
    // return "hello world";
    let dict = {};
    for (let word of words)
    {
        if (!(word in dict))
        {
            dict[word] = 1;
        }
        else
        {
            dict[word] = dict[word] + 1;
        }
    }
    // console.log(dict);

    let values = [];
    let trickleUp = function()
    {
        let index = values.length - 1;
        let [word, wordFrequency] = values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let [parentWord, parentFrequency] = values[parentIndex];

            if (wordFrequency<parentFrequency)
            {
                break;
            }
            if ((wordFrequency==parentFrequency) && (word>parentWord))
            {
                break;
            }
            values[index] = [...values[parentIndex]];
            index = parentIndex;

        }
        values[index] = [...[word,wordFrequency]];
    }


    for (let word in dict)
    {
        values.push([word,dict[word]]);
        trickleUp();
    }
    // console.log(values);
    // for (let item of values)
    // {
    //     console.log(item);
    // }

    // console.log("####");
    let trickleDown = function(index)
    {
        let [word,wordFrequency] = values[index];
        let largeIndex;

        while (index < values.length/2)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<values.length && values[rightIndex][1]>values[leftIndex][1] )
            {
                largeIndex = rightIndex;
            }
            else if( rightIndex<values.length && values[rightIndex][1]==values[leftIndex][1] && values[rightIndex][0]<values[leftIndex][0])
            {
                largeIndex = rightIndex;

            }
            else
            {
                largeIndex = leftIndex;
            }
            if (values[largeIndex]==undefined || wordFrequency>values[largeIndex][1])
            {
                break;
            }
            if (values[largeIndex]==undefined || (wordFrequency==values[largeIndex][1] && word<values[largeIndex][0]))
            {
                break;
            }
            values[index] = [...values[largeIndex]];
            index = largeIndex;
        }
        values[index] = [...[word,wordFrequency]];
    }
    let result = [];
    for (let i=0; i<k; i++)
    {
        let word = values[0][0];
        result.push(word);
        values[0] = [...values[values.length-1]];
        // console.log(values[0]);
        trickleDown(0);
        values.pop();
    }
    // console.log(result);
    return result;

};
let words = ["glarko","zlfiwwb","nsfspyox","pwqvwmlgri","qggx","qrkgmliewc","zskaqzwo","zskaqzwo","ijy","htpvnmozay","jqrlad","ccjel","qrkgmliewc","qkjzgws","fqizrrnmif","jqrlad","nbuorw","qrkgmliewc","htpvnmozay","nftk","glarko","hdemkfr","axyak","hdemkfr","nsfspyox","nsfspyox","qrkgmliewc","nftk","nftk","ccjel","qrkgmliewc","ocgjsu","ijy","glarko","nbuorw","nsfspyox","qkjzgws","qkjzgws","fqizrrnmif","pwqvwmlgri","nftk","qrkgmliewc","jqrlad","nftk","zskaqzwo","glarko","nsfspyox","zlfiwwb","hwlvqgkdbo","htpvnmozay","nsfspyox","zskaqzwo","htpvnmozay","zskaqzwo","nbuorw","qkjzgws","zlfiwwb","pwqvwmlgri","zskaqzwo","qengse","glarko","qkjzgws","pwqvwmlgri","fqizrrnmif","nbuorw","nftk","ijy","hdemkfr","nftk","qkjzgws","jqrlad","nftk","ccjel","qggx","ijy","qengse","nftk","htpvnmozay","qengse","eonrg","qengse","fqizrrnmif","hwlvqgkdbo","qengse","qengse","qggx","qkjzgws","qggx","pwqvwmlgri","htpvnmozay","qrkgmliewc","qengse","fqizrrnmif","qkjzgws","qengse","nftk","htpvnmozay","qggx","zlfiwwb","bwp","ocgjsu","qrkgmliewc","ccjel","hdemkfr","nsfspyox","hdemkfr","qggx","zlfiwwb","nsfspyox","ijy","qkjzgws","fqizrrnmif","qkjzgws","qrkgmliewc","glarko","hdemkfr","pwqvwmlgri"];
// let words = ["i","love","leetcode","i","love","coding"];
let k = 14;

let output = topKFrequent(words,k);
console.log(output);

