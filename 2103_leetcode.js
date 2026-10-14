/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let pointsMap = new Map();
    for (let i=0; i<=9; i++)
    {
        pointsMap.set(i, []);
    }
    //console.log(pointsMap);
    let n = rings.length;
    //console.log(n);
    let ringMap = new Map();
    for (let i=0; i<=n-2; i=i+2)
    {
        // console.log(i, i+2);
        let pointsStr = rings.slice(i,i+2);
        // console.log(pointsStr);
        let [color, rod] = pointsStr.split("");
        //console.log(color, rod);

        if (! ringMap.has(rod))
        {
            ringMap.set(rod,[color]);
        }
        else
        {
            ringMap.set(rod, [...ringMap.get(rod),color]);
        }
    }
    //console.log(ringMap);
    let countRod = 0;
    for (let [key, value] of ringMap)
    {
        let bool = true;
        for (color of "RGB")
        {
            if (! value.includes(color))
            {
                bool = false;
                break;
            }
        }
        if (bool == true)
        {
            countRod += 1;
        }
    }
    return countRod
};

let rings = "G4";
let output = countPoints(rings);
console.log(output);