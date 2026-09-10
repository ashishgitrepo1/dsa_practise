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
        let finalArray = [];
        let queue = [this.root];

        while (queue.length > 0)
        {
            let levelSize = queue.length;
            let smallArray = [];

            for (let i=0; i<levelSize; i++)
            {
                let node = queue.shift();
                smallArray.push(node.data);

                if (node.left)
                {
                    queue.push(node.left);
                }
                if (node.right)
                {
                    queue.push(node.right);
                }

            }
            finalArray.push(...[smallArray]);
        }
        console.log(finalArray);
        for (let item of finalArray)
        {
            console.log(item);
        }
        return finalArray[finalArray.length-1][0];
    }
    
    
}

let t = new Tree();
t.root = new Node(1);
t.root.left = new Node(2);
t.root.left.left = new Node(4);

t.root.right = new Node(3);
t.root.right.left = new Node(5);
t.root.right.left.left = new Node(7);

t.root.right.right = new Node(6);

console.log(t.Solution());