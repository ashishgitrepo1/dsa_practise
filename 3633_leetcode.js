/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let land = landStartTime.length;
    let water = waterStartTime.length;
    let earlyFinishTime = Infinity;

    for (let i=0; i<land; i++)
    {
        let landFinishTime = landStartTime[i]+landDuration[i];
        // console.log(landFinishTime);
        // console.log("+++++");
        for (let j=0; j<water; j++)
            {
                // console.log(landFinishTime, waterDuration[j], landFinishTime+waterDuration[j]);
                if (waterStartTime[j] < landFinishTime)
                {
                    earlyFinishTime = Math.min(earlyFinishTime, landFinishTime+waterDuration[j]);
                }
                else
                {
                    earlyFinishTime = Math.min(earlyFinishTime, waterStartTime[j]+waterDuration[j]);
                }
                
                // console.log("min = ",earlyFinishTime);
            }
        
    }

    for (let i=0; i<water; i++)
    {
        let waterFinishTime = waterStartTime[i]+waterDuration[i];
        // console.log(waterFinishTime);
        // console.log("+++++");
        for (let j=0; j<land; j++)
            {
                // console.log(waterFinishTime, landDuration[j], waterFinishTime+landDuration[j]);
                if (landStartTime[j] < waterFinishTime)
                {
                    earlyFinishTime = Math.min(earlyFinishTime, waterFinishTime+landDuration[j]);
                }
                else
                {
                    earlyFinishTime = Math.min(earlyFinishTime, landStartTime[j]+landDuration[j]);
                }
                
                // console.log("min = ",earlyFinishTime);
            }
        
    }
    return earlyFinishTime;
};

let landStartTime = [5];
let landDuration = [3];
let waterStartTime = [1];
let waterDuration = [10];

let output = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
console.log(output);