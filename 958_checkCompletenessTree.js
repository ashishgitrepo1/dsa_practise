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
       let check = false;

       while (queue.length > 0)
       {
        let levelSize = queue.length;
        for (let i=0; i<levelSize; i++)
        {
            let node = queue.shift();
            if (node.left)
            {
                if (check)
                {
                    return false;
                }
                else
                {
                    queue.push(node.left);
                }
            }
            else
            {
                check = true;
            }

            if (node.right)
            {
                if (check)
                {
                    return false;
                }
                else
                {
                    queue.push(node.right);
                }
            }
            else
            {
                check = true;
            }
        }
       }
       return check;
    }  
    
}

let t = new Tree();

t.root = new Node(1);
t.root.left = new Node(2);
t.root.left.left = new Node(4);
t.root.left.right = new Node(5);

t.root.right = new Node(3);
t.root.right.right = new Node(7);



console.log(t.Solution());