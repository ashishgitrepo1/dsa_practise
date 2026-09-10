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
        let stack = [this.root];
        //let current = this.root;
        let output = [];
        while (stack.length > 0)
        {
            let node = stack.pop();
            output.push(node.data);
            if (node.right)
            {
                stack.push(node.right);
            }
            if (node.left)
            {
                stack.push(node.left);
            }
        }

       
        return output;
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