/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let n = nums.length;
    //let ans = [];
    let answer = [];
    for (let i=0; i<n-k+1; i++)
    {
        let subArray = nums.slice(i,i+k-1+1);
        // console.log(subArray);
        // let xMap = new Map();
        // for (let num of subArray)
        // {
        //     if (! xMap.has(num))
        //     {
        //         xMap.set(num ,1);
        //     }
        //     else
        //     {
        //         xMap.set(num, xMap.get(num)+1);
        //     }
        // }

        //new dictionary
        let xDict = {};
        for (let num of subArray)
        {
            if (! (num in xDict))
            {
                xDict[num] = 1;
            }
            else
            {
                xDict[num] = xDict[num]+1;
            }
        }

        // let allFreqs = [...xMap.values()].sort((a, b) => b -a);
        // console.log("sorted freqs = ",allFreqs);
        // //console.log(xMap);
        // let freqMap = new Map();
        // for (let [key, value] of xMap)
        // {
        //     if (! freqMap.has(value))
        //     {
        //         freqMap.set(value, [key]);
        //     }
        //     else
        //     {
        //         freqMap.set(value, [...freqMap.get(value),key]);
        //     }
        // }
        // //console.log(freqMap);
        // let dict = {};
        // for (let [key, value] of freqMap)
        // {
        //     dict[key] = value.sort((a,b)=>b-a);
        // }
        // console.log(dict);

        const sortedArray = Object.entries(xDict).sort((a, b) => {
        const keyA = Number(a[0]);
        const keyB = Number(b[0]);
        const valA = a[1];
        const valB = b[1];

        // 1. Sort by value (ascending). Switch to `valB - valA` if you want descending values.
        if (valA !== valB) {
            return valB- valA;
        }

        // 2. If values are the same, sort by key descending (larger key on top)
        return keyB- keyA;
        });
        console.log(sortedArray, sortedArray.length);
        // for (let item of sortedArray)
        // {
        //     console.log(item);
        // }


        if (sortedArray.length < x)
        {
            sortedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
        let subTotal = 0;
        for (let i=0; i<x; i++)
        {
            // console.log(sortedArray[i][0]);
            if (sortedArray[i] == undefined)
            {
                break;
            }
            subTotal += (Number(sortedArray[i][0])*sortedArray[i][1]);
        }
        answer.push(subTotal);

    }
    return answer;
};

let nums = [9,2,2];
let k = 3;
let x = 3;

let output = findXSum(nums, k, x);
console.log(output);