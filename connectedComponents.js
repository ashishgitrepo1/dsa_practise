let connectedComponents = function(graph)
{
    let wasVisited = {};
    for (let node in graph)
    {
        wasVisited[node] = false;
    }
    let count = 0 ;
    
    console.log("before traversal ",wasVisited);
    for (let node in wasVisited)
    {
        console.log("node = ",node, wasVisited[node]);
        if (wasVisited[node] == false)
        {
            console.log("checkpoint = ",)
            count++;
            let stack = [];
            stack.push(node);
            let depthFirstSearch = function()
            {
                while(stack.length > 0 )
                {
                    let item = stack.pop();
                    console.log("item in stack = ", item);
                    wasVisited[item] = true;
                    for (let n of graph[item])
                    {
                        if (wasVisited[n] == false)
                        {
                            stack.push(n);
                            wasVisited[n] = true;
                        }
                        else
                        {
                            continue;
                        }
                        
                    }
                }
            }
            depthFirstSearch();
        }
    }
    console.log("after traversal = ", wasVisited);
    return count;
}
const graph = {
   3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
}
//console.log(graph);
let components = connectedComponents(graph);

console.log("components = ", components);