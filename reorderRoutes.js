var minReorder = function(n, connections) {
    // return "reorder route";
    let graph = {};
    for (let edge of connections)
    {
        let [a,b] = edge;
        if (!(a in graph))
        {
            graph[a] = [];
        }
        graph[a].push(b);
    }
    for (let i=0; i<n; i++)
    {
        if (!(i in graph))
        {
            graph[i] = [];
        }
    }
    console.log(graph);
    let newGraph = {};
    for (let edge of connections)
    {
        let [a,b] = edge;
        if (!(a in newGraph))
        {
            newGraph[a] = [];
        }
        if (!(b in newGraph))
        {
            newGraph[b] = [];
        }
        newGraph[a].push(b);
        newGraph[b].push(a);
    }
    console.log(newGraph);
    let total = 0;

    let wasVisited = {};
    for (let i=0; i<n; i++)
    {
        wasVisited[i] = false;
    }
    let stack = [0];
    wasVisited[0] = true;
    while (stack.length > 0)
    {
        let node = stack.pop();
        for (let neighbor of newGraph[node])
        {
            if (wasVisited[neighbor] == false)
            {
                wasVisited[neighbor] = true;
                stack.push(neighbor);
                if (graph[node].includes(neighbor))
                {
                    total++;
                }
            }
            
        }
    }
    return total;
};

let n = 6;
let connections = [[0,1],[1,3],[2,3],[4,0],[4,5]];

let output = minReorder(n,connections);
console.log(output);

