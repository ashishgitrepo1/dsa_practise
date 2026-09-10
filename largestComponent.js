let largestComponent = function(graph)
{
    let wasVisited = {};

    let largeComponent = {};
    for (let nodes in graph)
    {
        wasVisited[nodes] = false;
    }
    //console.log(wasVisited);
    for (let nodes in graph)
    {
        

        if (wasVisited[nodes] == false)
        {
            
            let count = 0;
            let stack = [];
            stack.push(nodes);
            //count++;

            while(stack.length > 0)
            {
                let nodePopped = stack.pop();

                //console.log("item popped for ", nodes, nodePopped);
                wasVisited[nodePopped] = true;
                count++;
                for (let node of graph[nodePopped])
                {
                    if (wasVisited[node] == false)
                    {
                        stack.push(node);
                        wasVisited[node] = true;
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            largeComponent[nodes] = count;
        }
        
    }
    return largeComponent;
}
const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
//console.log(graph);

let largest = largestComponent(graph);
let largeValue = [];
for (let value in largest)
{
    largeValue.push(largest[value]);
}
console.log("largest size of component = ", Math.max(...largeValue));
