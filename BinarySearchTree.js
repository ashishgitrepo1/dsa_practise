class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
class BST
{
    constructor()
    {
        this.root = null;
    }
    Insert(data)
    {

       
        let newNode = new Node(data);
        //console.log("data inserted = ",data);
        if(this.root == null)
        {
            this.root = newNode;
        }
        else
        {
            let parent = null;
            let current = this.root;
            while (true)
            {
                //console.log("data inserted = ",data);
                parent = current;
                if(data > current.data)
                {
                    current = current.right;
                    if (current == null)
                    {
                        parent.right = newNode;
                        break;
                    }

                }
                else
                {
                    current = current.left;
                    if (current == null)
                    {
                        parent.left = newNode;
                        break;
                    }
                }
            }

        }

        
    }
    Search(data)
    {
        let current = this.root;
        if(current == null)
        {
            return null;
        }
        while(current.data != data)
        {
            if (data > current.data)
            {
                current = current.right;
            }
            else
            {
                current = current.left
            }
            if (current == null)
            {
                return null;
            }
        }
        return current;
    }
    
    InOrder(output,root)
    {
        if (root == null)
        {
            return;
        }
        else
        {
            this.InOrder(output,root.left);
            output.push(root.data);
            this.InOrder(output,root.right);
        }
    }
    Display()
    {
        let output = [];

        this.InOrder(output,this.root);
        console.log(output);
    }
    getSuccessor(delNode)
    {
        let successorParent = delNode;
        let successor = delNode;
        let current = delNode.right;

        while(current != null)
        {
            successorParent = successor;
            successor = current;
            current = current.left;
        }
        if (successor != delNode.right)
        {
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }
        return successor;
    }
    Delete(data)
    {
        let parent = null;
        let current = this.root;

        if (current == null)
        {
            return null;
        }

        while(current.data != data)
        {
            parent = current;
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
        //console.log("node to be deleted = ",current.data,current.left,current.right);
        //node to be deleted has no children
        if(current.left==null && current.right==null)
        {
            if (current == this.root)
            {
                this.root = null;
            }
            else if(current == parent.right)
            {
                parent.right = null;
            }
            else
            {
                parent.left = null;
            }
            
        }
        //node to be deleted has only 1 child
        else if (current.right==null && current.left!=null)
        {
            if (current == this.root)
            {
                this.root = current.left;
            }
            else if (current == parent.right)
            {
                parent.right = current.left;
            }
            else
            {
                parent.left = current.left;
            }
        }
        else if (current.left==null && current.right!=null)
        {
            if(current == this.root)
            {
                this.root = current.right;
            }
            else if (current == parent.right)
            {
                parent.right = current.right;
            }
            else
            {
                parent.left = current.right;
            }
        }
        //node has 2 children
        else if (current.left!=null && current.right!=null)
        {
            let successor = this.getSuccessor(current);
            if(current == this.root)
            {
                this.root = successor;
            }
            else if (current == parent.right)
            {
                parent.right = successor;
            }
            else
            {
                parent.left = successor;
            }
            successor.left = current.left;
        }
        return current;
    }
}

let obj = new BST();
obj.Insert(50);
obj.Insert(40);
obj.Insert(70);
obj.Display();
// let search = obj.Search(7000);
// if (search == null)
// {
//     console.log("node not found");
// }
// else
// {
//     console.log("Node successfully found");
// }
let del = obj.Delete(50);
if (del == null)
{
    console.log("Node to be deleted not found");
}
else
{
    console.log("Node deleted successfully");
}
obj.Display();


