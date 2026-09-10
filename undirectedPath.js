let hasUndirectedPath = function(edges, source, dest)
{
    let buildGraph = function(edges)
    {
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
        return graph;
    }
    let graph = buildGraph(edges);
    //console.log(graph);
    let wasVisited = {};
    let dfs = function(graph, source, dest)
    {
        if (source == dest)
        {
            return true;
        }
        let stack = [];
        stack.push(source);
        wasVisited[source] = true;

        while (stack.length > 0)
        {
            let node = stack.pop();
            if (node == dest)
            {
                return true;
            }
            for (let nodes of graph[node])
            {
                if (!(nodes in wasVisited))
                {
                    stack.push(nodes);
                    wasVisited[nodes] = true;
                }
                
            }
        }
        return false;
    }
    return dfs (graph, source, dest);
}
const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"]
];

let result = hasUndirectedPath(edges, "j", "o");
console.log("result = ", result);
