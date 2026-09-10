var allPathsSourceTarget = function(graph) {
    // return "test";
    let n = graph.length;
    let Graph = {};
    for (let i=0; i<n; i++)
    {
        if (!(i in Graph))
        {
            Graph[i] = [];
        }
        if(graph[i].length > 0)
        {
            for (let item of graph[i])
            {
                Graph[i].push(item);
            }
        }
       
        
    }
    // for (let item in Graph)
    // {
    //     console.log(item, Graph[item]);
    // }
    // let path = [0];
    let paths = [];
    let stack = [[0,[0]]];

    while (stack.length > 0)
    {
        let [node, path] = stack.pop();
        // console.log("node = ",node);
        // console.log("path = ",path);
        if (node == n-1)
        {
            paths.push(path);
        }
        for (let neighbor of Graph[node])
        {
            // console.log("check = ",neighbor);
            stack.push([neighbor,[...path,neighbor]]);
        }
    }
    // for (let item of paths)
    // {
    //     console.log(item);
    // }
    return paths;



};
let graph = [[1,2],[3],[3],[]];

let output = allPathsSourceTarget(graph);
console.log(output);