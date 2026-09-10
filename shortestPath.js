let findAnswer = function(n, edges) {
    let graph = {};
    for (let edge of edges)
    {
        let [a,b] = edge;
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

    let paths = [];
    let source = 0;
    let destination = n-1;

    let stack = [[source]];
    let pathsLen = [];


    while(stack.length > 0)
    {
        let currentPath = stack.pop();
        let currentNode = currentPath[currentPath.length-1];

        if (currentNode == destination)
        {
            paths.push(currentPath);
            let total = 0;
            let n = currentPath.length;
            for (let i=0; i<n-1; i++)
            {
                total = total + edges;
            }

        }

        for (let neighbor of graph[currentNode])
        {
            if (!(currentPath.includes(neighbor)))
            {
                let newPath = [...currentPath,neighbor];
                stack.push(newPath);
            }
        }
    }

    for (let path of paths)
    {
        console.log(path);
    }
};
let n = 6;
let edges = [[0,1,4],[0,2,1],[1,3,2],[1,4,3],[1,5,1],[2,3,1],[3,5,3],[4,5,2]];

findAnswer(n,edges);




