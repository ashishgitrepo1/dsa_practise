/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let n = word.length;
    for (let i=0; i<n; i++)
    {
        let leftStr = word.slice(0,i);
        let rightStr = word.slice(i+1);
        let fullStr = leftStr + rightStr;
        //console.log(fullStr);

        let equalMap = new Map();
        for (let char of fullStr)
        {
            if (! equalMap.has(char))
            {
                equalMap.set(char, 1);
            }
            else
            {
                equalMap.set(char, equalMap.get(char)+1);
            }
        }
        //console.log(equalMap);
        let freqMap = new Map();
        for (let [key, val] of equalMap)
        {
            if (! freqMap.has(val))
            {
                freqMap.set(val, [key]);
            }
            else
            {
                freqMap.set(val, [...freqMap.get(val), key]);
            }
        }
        //console.log(freqMap);

        if (freqMap.size == 1)
        {
            return true;
        }

    }
    return false;
};