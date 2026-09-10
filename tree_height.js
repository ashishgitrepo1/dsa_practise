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
        let height = 0;
        while (queue.length > 0)
        {
            height++;
            let levelSize = queue.length;

            for (let i=0; i<levelSize; i++)
            {
                let node = queue.shift();
                if (node.left)
                {
                    queue.push(node.left);
                }
                if (node.right)
                {
                    queue.push(node.right);
                }
            }
        }
        return height;
    }
    
    
}

let t = new Tree();
t.root = new Node(5);
t.root.left = new Node(11);
t.root.right = new Node(3);
t.root.left.left = new Node(4);
t.root.left.right = new Node(15);
t.root.right.right = new Node(12);

console.log(t.Solution());