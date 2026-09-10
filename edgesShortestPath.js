let findAnswer = function(n, edges) {
    let graph = {};
    for (let edge of edges)
    {
        let [a,b,w] = edge;
        if (!(a in graph))
        {
            graph[a] = [];
        }
        if (!(b in graph))
        {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    // for (let key in graph)
    // {
    //     console.log(key, graph[key]);
    // }

    let weightedGraph = {};
    for (let edge of edges)
    {
        let [a,b,w] = edge;
        weightedGraph[[a,b]]=w;
    }
    // for (let key in weightedGraph)
    // {
    //     console.log(key, weightedGraph[key]);
    // }


    let wasVisited = {};
    for (let nodes in graph)
    {
        wasVisited[nodes] = false;
    }
    let queue = [];
    let total = 0;
    let path = [];
    let paths = [];

    queue.push([0,total]);
    while (queue.length > 0)
    {
        let removedNode = queue.shift();
        let [node,total] = removedNode;
        wasVisited[node] = true;
        path.push(node);

        for (let nodes of graph[node])
        {
            if (wasVisited[nodes] == false)
            {
                queue.push(nodes,weightedGraph[[node,nodes]]);
                path.push(nodes);
            }
        }
    }
};
let n = 6;
let edges = [[0,1,4],
[0,2,1],
[1,3,2],
[1,4,3],
[1,5,1],
[2,3,1],
[3,5,3],
[4,5,2]];


findAnswer(n,edges);