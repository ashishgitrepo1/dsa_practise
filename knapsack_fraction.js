let data = {
    "weight": [10 , 6 , 2],
    "profit":[40 , 30 ,6]
};
let max_weight = 17;
let selected_wt = 0;
let max_profit = 0;

let weight = data['weight']
let profit = data['profit']
let ratio = [];

let n = weight.length;
for (let i=0; i<n; i++)
{
    ratio.push(profit[i]/weight[i]);
}
// console.log(ratio);
// ratio.sort((a,b) => b-a);
// console.log(ratio)
// console.log(data);
let newData = [];

for (let i=0; i<n; i++)
{
    newData.push([weight[i],profit[i],ratio[i]]);
}
// console.log(newData);
newData.sort((a,b)=>b[n-1]-a[n-1]);
// for (let data of newData)
// {
//     console.log(data);
// }
let currentWeight = 0;
let maxProfit = 0;
let fraction = 0;
let i=0;
while (currentWeight<max_weight && i<n)
{
    currentWeight += newData[i][0];
    maxProfit += newData[i][1];
    

    if (currentWeight > max_weight)
    {
        // console.log(newData[i][0]);
        fraction = (max_weight-(currentWeight-newData[i][0]))/newData[i][0];
        maxProfit = (maxProfit-newData[i][1]) + (newData[i][1]*fraction);
        break;
    }
    i += 1;
}
// console.log(currentWeight);
// console.log(fraction);
console.log('maximum profit = ',maxProfit);



