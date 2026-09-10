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
    Display()
    {
        let nodes = [];
        this.InOrder(nodes,this.root);
        console.log("nodes = ",nodes);
    }
    treeSum(dict, root)
    {
        if (root == null)
        {
            return 0;
        }
        else
        {

        
       
            let leftSum = this.treeSum(dict,root.left);
            let rightSum = this.treeSum(dict,root.right);

            let total = leftSum + rightSum + root.data;
            if (!(total in dict))
            {
                dict[total] = 1;
            }
            else
            {
                dict[total] = dict[total] + 1;
            }
            return leftSum + rightSum + root.data;
        }
        
    }

    trickleUp(values)
    {
        console.log("testing tricle");
        let index = values.length - 1;
        let data = values[index];
        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = values[parentIndex];

            if (data[1]<parent[1])
            {
                break;
            }
            values[index] = parent;
            index = parentIndex;
        }
        values[index] = data;
    }
    
    Solution()
    {

        
        let dict = {};
        this.treeSum(dict,this.root);
        console.log("frequencies = ",dict);
        let values = [];

        
        for (let item in dict)
        {
            values.push([item,dict[item]]);
            this.trickleUp(values);
        }

        let maxFreq = values[0][1];
        console.log("heap = ",values);

        let ans = [];
        for (let item in dict)
        {
            if(dict[item] == maxFreq)
            {
                ans.push(parseInt(item));
            }
        }
    console.log("answer = ",ans);
    }
}
let t = new Tree();
t.root = new Node(1);
t.root.left = new Node(3);
t.root.left.right = new Node(2);
// t.Solution();


t.Display();
t.Solution();