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
    Insert(data)
    {
        let newNode = new Node(data);
        if (this.root == null)
        {
            this.root = newNode;
        }
        else
        {
            let parent = null;
            let current = this.root;
            while(true)
            {
                parent = current;
                if (data > current.data)
                {
                    current = current.right;
                    if (current == null)
                    {
                        parent.right = newNode;
                        return;
                    }
                }
                else
                {
                    current = current.left;
                    if (current == null)
                    {
                        parent.left = newNode;
                        return;
                    }
                }
            }
        }
    }
    InOrder(root,nodes)
    {
        if (root == null)
        {
            return;
        }
        this.InOrder(root.left,nodes);
        nodes.push(root.data);
        this.InOrder(root.right,nodes);
    }
    Display()
    {
        let nodes = [];
        this.InOrder(this.root,nodes);
        console.log("nodes = ",nodes);
    }
    kthSmallest(root,temp,res)
    {
        //console.log("temp = ",temp);
        if (root == null)
        {
            return;
        }
        this.kthSmallest(root.left,temp,res);
        ++temp;
        if (temp == 3)
        {
            console.log("res = ",root.data);
            res = root.data;
            return res;
        }
        this.kthSmallest(root.right,temp,res);
    }
    Solution()
    {
        let res = null;
        let k = this.kthSmallest(this.root,0,res);
        console.log("kth smallest = ",k);
    }
}
let t = new Tree();
t.Insert(3);
t.Insert(1);
t.Insert(4);
t.Insert(2);
t.root.left.right = new Node(2);
t.Display();

t.Solution();