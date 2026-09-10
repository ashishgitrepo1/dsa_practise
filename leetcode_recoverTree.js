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
    InOrder(nodes,root)
    {
        if (root == null)
        {
            return;
        }
        else
        {
            this.InOrder(nodes,root.left);
            nodes.push(root.data);
            this.InOrder(nodes,root.right);
        }
    }
    Search(data)
    {
        let current = this.root;
        while(current.data != data)
        {
            if (data > current.data)
            {
                current = current.right;
            }
            else
            {
                current = current.left;
            }
            if (current == null)
            {
                return null;
            }
        }
        return current;
    }
    Display()
    {
        let nodes = [];
        this.InOrder(nodes,this.root);
        console.log("nodes = ",nodes);

        let oldNodes = [...nodes];

        let nodesSorted = [...nodes.sort((a,b)=>a-b)];
        console.log("sorted nodes = ",nodesSorted);
        console.log("old nodes = ",oldNodes);

        let n = nodes.length;
        let swap = [];
        for (let i=0; i <n; ++i)
        {
            console.log(oldNodes[i],nodesSorted[i]);
            if (oldNodes[i] != nodesSorted[i] )
            {
                swap.push(oldNodes[i]);
            }
        }
        console.log("swap nodes = ",swap);
        let firstNode = swap[0];
        let secondNode = swap[1];

        let firstPtr = this.Search(firstNode);
        let secondPtr = this.Search(secondNode);

        console.log("first ptr = ",firstPtr);
        console.log("second ptr = ",secondPtr);

        let temp = firstPtr;
        firstPtr = secondPtr;
        secondPtr = temp;

        let newNodes = [];
        this.InOrder(newNodes,this.root);
        console.log("new nodes = ",newNodes)
    }
   
}
let t = new Tree();
t.root = new Node(1);
t.root.left = new Node(3);
t.root.left.right = new Node(2);
t.Display();