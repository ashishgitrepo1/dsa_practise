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
    Diameter(dia,root)
    {
        if (root == null)
        {
            return 0;
        }
        else
        {
            let leftHeight = this.Diameter(dia,root.left);
            let rightHeight = this.Diameter(dia,root.right);

            if (leftHeight > rightHeight)
            {
                leftHeight = leftHeight + 1;
            }
            else
            {
                rightHeight = rightHeight + 1;
            }

            dia.push(leftHeight+rightHeight);
            return leftHeight+rightHeight;
        }
    }
    Solution()
    {
        let dia = [];
        let diameter = this.Diameter(dia,this.root);

        console.log("Diameter of tree = ",dia, Math.max(...dia));
    }
}
let t = new Tree();
t.root = new Node(1);
t.root.left = new Node(2);
t.root.right = new Node(3);
t.root.right.right = new Node(20);
t.root.left.left = new Node(4);
t.root.left.right = new Node(5);

t.Solution();