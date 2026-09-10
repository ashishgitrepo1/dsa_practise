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
    validateBST(root,bool,previous)
    {
        if(root == null )
        {
            return;
        }
        this.validateBST(root.left,bool,previous);
        if (previous!=null && previous>=root.data)
        {
            bool = false;
            console.log(bool);
            //return;
        }
        previous = root.data;
        this.validateBST(root.right,bool,previous);
    }
    Solution()
    {
        let bool = true;
        let previous = null;

        this.validateBST(this.root,bool,previous);
        console.log("BST = ",bool,previous);
    }
}
let t = new Tree();
t.root = new Node(5);
t.root.left = new Node(1);
t.root.right = new Node(4);
t.root.right.left = new Node(3);
t.root.right.right = new Node(6);
t.Solution();