var eventualSafeNodes = function(graph) {
    // return "hello world";
    let n = graph.length;
    let indegree = {};
    for (let i=0; i<n; i++)
    {
        indegree[i] = 0;
    }
    let newGraph = [];
    for (let i=0; i<n; i++)
    {
        newGraph[i] = [];
    }
    for (let i=0; i<n; i++)
    {
        for (let node of graph[i])
        {
            newGraph[node].push(i);
            indegree[i] = indegree[i]+1;
        }
    }
    // console.log(newGraph);
    // console.log(indegree);
    let queue = [];
    for (let i=0; i<n; i++)
    {
        if (indegree[i] == 0)
        {
            queue.push(i);
        }
    }
    let output = [];
    while (queue.length > 0)
    {
        let node = queue.shift();
        output.push(node);

        for (let neighbor of newGraph[node])
        {
            indegree[neighbor] = indegree[neighbor] - 1;
            if (indegree[neighbor] == 0)
            {
                queue.push(neighbor);
            }
        }
    }
    // return output.toSorted;
    output.sort(function(a, b) {
            return a - b;
        });
        return output;
};
let graph = [[12],[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[]];
let output = eventualSafeNodes(graph);
console.log(output);
