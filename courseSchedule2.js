var findOrder = function(numCourses, prerequisites) {
    // return "hello world";
    let graph = {};
    for (let edge of prerequisites)
    {
        let [a,b] = edge;
        if (!(b in graph))
        {
            graph[b] = [];
        }
        graph[b].push(a);
    }
    for (let i=0; i<numCourses; i++)
    {
        if (!(i in graph))
        {
            graph[i] = [];
        }
    }
    // console.log(graph);
    // for (let node in graph)
    // {
    //     console.log(node, graph[node]);
    // }
    let indegree = {};
    for (let i=0; i<numCourses; i++)
    {
        indegree[i] = 0;
    }
    for (let nodes in graph)
    {
        for (let neighbor of graph[nodes])
        {
            indegree[neighbor] = indegree[neighbor]+1;
        }
    }
    for (let degree in indegree)
    {
        console.log(degree, indegree[degree]);
    }
    let queue = [];
    for (let i=0; i<numCourses; i++)
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
        for (let neighbor of graph[node])
        {
            indegree[neighbor] = indegree[neighbor]-1;
            if (indegree[neighbor] == 0)
            {
                queue.push(neighbor);
            }
        }
    }
    if (output.length == numCourses)
    {
        return output;
    }
    else
    {
        return [];
    }
};
let numCourses = 1;
let prerequisites = [];
let output = findOrder(numCourses,prerequisites);
console.log(output);