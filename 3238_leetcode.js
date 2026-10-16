/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let winningMap = new Map();
    let winners = 0;
    for (let num of pick)
    {
        let [a, b] = num;
        if (! winningMap.has(a))
        {
            winningMap.set(a, [b]);
        }
        else
        {
            winningMap.set(a, [...winningMap.get(a),b]);
        }
    }
    //console.log(winningMap);
    for (let [key, val] of winningMap)
    {
        let freqMap = new Map();
        let mainKey = key;
        let arr = val;
        //console.log(mainKey, arr);
        for (let num of arr)
        {
            if (! freqMap.has(num))
            {
                freqMap.set(num, 1);
            }
            else
            {
                freqMap.set(num, freqMap.get(num)+1);
            }
        }
        //console.log(freqMap);
        for (let [key,val] of freqMap)
        {
            if (val > mainKey)
            {
                winners += 1;
                break;
            }
        }
    }
    return winners;
};
let n = 2;
let pick = [[0,8],[0,3]];

let output = winningPlayerCount(n, pick);
console.log(output);

