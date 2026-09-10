var maxAverageRatio = function(classes, extraStudents) {
    // return "hello world";

    let n = classes.length;
    let total = 0;

    for (let nums of classes)
    {
        let [a,b] = nums;
        total = total + a/b;
    }
    let values = [];
    let oldTotal = total;

    let trickleUp = function()
    {

    }


    for (let nums of classes)
    {
        let [a,b] = nums;
        total = (total - (a/b) + (a+extraStudents)/(b+extraStudents))/n;
        values.push(total);
        trickleUp();
        total = oldTotal;
    }
    console.log(values);

    return Number(Math.max(...values).toFixed(5));
};
let classes = [[2,4],[3,9],[4,5],[2,10]];
let extraStudents = 4;
let output = maxAverageRatio(classes,extraStudents);
console.log(output);

