class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree
{
    constructor()
    {
        this.root = null;
    }
    Solution()
    {
            let queue = [this.root];
            let graph = {};
            let wasVisited = {};//stores tha parent of the node

            wasVisited[this.root.data] = null;
            while (queue.length > 0)
            {
                let node = queue.shift();
                if (node.left && !(node.left.data in wasVisited))
                {
                    wasVisited[node.left.data] = node.data;
                    if (!(node.data in graph))
                    {
                        graph[node.data] = [];
                    }
                    
                    
                    graph[node.data].push(node.left.data);
                    

                    if (!(node.left.data in graph))
                    {
                        graph[node.left.data] = [];
                    }
                    
                    
                    graph[node.left.data].push(node.data);
                    
                    queue.push(node.left);
                }

                if (node.right && !(node.right.data in wasVisited))
                {
                    wasVisited[node.right.data] = node.data;
                    if (!(node.right.data in graph))
                    {
                        graph[node.right.data] = [];
                    }
                    
                        graph[node.right.data].push(node.data);
                    

                    if (!(node.data in graph))
                    {
                        graph[node.data] = [];
                    }
                   
                    
                        graph[node.data].push(node.right.data);
                    
                    queue.push(node.right);
                }

            }
       
    console.log(wasVisited);
    console.log(graph);
    for (let nodes in graph)
    {
        console.log(nodes, graph[nodes]);
    }
    }

    
}

let t = new Tree();

t.root = new Node(3);
t.root.left = new Node(5);
t.root.left.left = new Node(6);
t.root.left.right = new Node(2);
t.root.left.right.left = new Node(7);
t.root.left.right.right = new Node(4);

t.root.right = new Node(1);
t.root.right.left = new Node(0);
t.root.right.right = new Node(8);

console.log(t.Solution());