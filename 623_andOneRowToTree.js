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
    Solution(val,depth)
    {
       let visited = {};
       let queue = [[this.root,1]];
       visited[this.root.data] = null;

       while (queue.length > 0)
       {
        console.log("length of queue = ",queue.length);
        let [node,level] = queue.shift();
        console.log("node removed, level = ",node.data,level);
        if (level == depth)
        {
            console.log("level and depth = ",level,depth,node);
            if (node == visited[node].left)
            {
                console.log("left node and its parent = ",node.data,visited[node].data);
                let newNode = new Node(val);
                visited[node].left = newNode;
                newNode.left = node;
            }
            if (node == visited[node].right)
            {
                console.log("right node and its parent = ",node.data);
                let newNode = new Node(val);
                visited[node].right = newNode;
                newNode.right = node;
            }
        }
        else
        {
            if (node.left && !(node.left.data in visited))
            {
                visited[node.left] = node;
                console.log("left data and its level = ",node.left.data, level+1,visited[node.left].data);
                queue.push([node.left,level+1]);
            }

            if (node.right && !(node.right.data in visited))
            {

                visited[node.right] = node;
                console.log("right data and its level = ",node.right.data, level+1,visited[node.right].data);
                queue.push([node.right,level+1]);
            }

        }

            
       }
        console.log(this.root.data);

        let bfs = [this.root];
        let output = [];
        while (bfs.length > 0)
        {
            let levelSize = bfs.length;
            for (let i=0; i<levelSize; i++)
            {
                let node = bfs.shift();
                output.push(node.data);

                if (node.left)
                {
                    bfs.push(node.left);
                }
                if (node.right)
                {
                    bfs.push(node.right);
                }
            }
        }
        console.log(visited);
        console.log(output);
    }
    
    
    
}

let t = new Tree();

t.root = new Node(4);
t.root.left = new Node(2);
t.root.left.left = new Node(3);
t.root.left.right = new Node(1);

t.root.right = new Node(6);
t.root.right.left = new Node(5);

let val = 1;
let depth = 2;
console.log(t.Solution(val,depth));