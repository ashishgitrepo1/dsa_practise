let hasPath = function(graph, source, dest)
{
    if (source == dest)
    {
        return true;
    }
    let stack = [];
    stack.push(source);

    while (stack.length > 0)
    {
        let item = stack.pop();
        if (item == dest)
        {
            return true;
        }
        for (let nodes of graph[item])
        {
            stack.push(nodes);
        }
    }
    return false;
}
const graph = {
    "f": ["g", "i"],
    "g": ["h"],
    "h": [],
    "i": ["g", "k"],
    "j": ["i"],
    "k": []
};
console.log(hasPath(graph,"f", "k"));