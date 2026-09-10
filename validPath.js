let validPath = function(n, edges, source, destination) {
    if (source == destination)
    {
        return true;
    }
    let graph = {};
    for (let edge of edges)
    {
        [a, b] = edge;
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
    //console.log(graph);

    let wasVisited = {};
    for (let nodes in graph)
    {
        wasVisited[nodes] = false;
    }
    //console.log(wasVisited);
    wasVisited[source] = true;
    let stack = [];
    stack.push(source);

    while(stack.length > 0)
    {
        let nodeRemoved = stack.pop();
        for (let nodes of graph[nodeRemoved])
        {
           if (wasVisited[nodes] == false)
           {
            wasVisited[nodes] = true;
            stack.push(nodes);

            if (nodes == destination)
            {
                return true;
            }
           }
        }
    }
    return false;
};

let n = 1;
let edges = [];
let  source = 0; 
let  destination = 0;

let result = validPath(n, edges, source, destination);

console.log(result);

