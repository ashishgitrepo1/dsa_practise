let kahns = function(numCourses,edges)
{
    // return "test hello";
    // let n = edges.length;
    let indegree = {};
    let graph = {};
    for (let edge of edges)
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
    console.log(graph);

    for (let i=0; i<numCourses; i++)
    {
        indegree[i] = 0;
    }
    for (let i=0; i<numCourses; i++)
    {
        for (let neighbor of graph[i])
        {
            indegree[neighbor] = indegree[neighbor]+1;
        }
    }
    console.log("indegree = ",indegree);
    let queue = [];
    for (let i=0; i<numCourses; i++)
    {
        if (indegree[i] == 0)
        {
            queue.push(i);
        }
    }
    // console.log(queue);
    let result = [];
    while (queue.length > 0)
    {
        let node = queue.shift();
        // console.log("node = ",node);
        // console.log("neighbor = ",graph[node]);
        result.push(node);
        for (let neighbor of graph[node])
        {
            indegree[neighbor] = indegree[neighbor] - 1;
            if (indegree[neighbor] == 0)
            {
                queue.push(neighbor);
            }
        }
    }
    // return result;
    if (result.length == numCourses)
    {
        return true;
    }
    else
    {
        return false;
    }

}
let numCourses = 4;
let edges = [[1,0],[2,0],[3,1],[3,2]];

let output = kahns(numCourses,edges);
console.log("output = ",output);