let breadthFirstSearch = function(dict,start)
{
    //console.log("testing");
    let dfs = [start];
    let result = [];

    while (dfs.length > 0)
    {
        let item = dfs.pop();
        result.push(item);
        for (let nodes of dict[item])
        {
            dfs.push(nodes);
        }

    }
    console.log(result);
}
const dict = {
    "a":["c","b"],
    "b":["d"],
    "c":["e"],
    "d":["f"],
    "e":[],
    "f":[]

}

breadthFirstSearch(dict, "a");
