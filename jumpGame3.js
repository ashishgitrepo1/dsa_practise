var canReach = function(arr, start) {
    // return "hello world";
    let n = arr.length;
    let queue = [[start,arr[start]]];

    let wasVisited = {};
    for (let i=0; i<n; i++)
    {
        wasVisited[i] = false;
    }

    while(queue.length > 0)
    {
        let [index, item] = queue.shift();
        // console.log("index = ",index);
        // console.log("item = ",item);
        if (item == 0)
        {
            return true;
        }
        if (index+item < n && wasVisited[index]==false)
        {
            wasVisited[index] = true;
            queue.push([index+item, arr[index+item]]);
        }
        if (index-item > 0 && wasVisited[index]==false)
        {
            wasVisited[index] = true;
            queue.push([index-item, arr[index-item]]);
        }
        
    }
    return false;
};
let arr = [3,0,2,1,2];
let start = 2;

let output = canReach(arr,start);
console.log(output);
