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
        let result = [];
        let queue = [this.root];

        while (queue.length > 0)
        {
            let levelSize = queue.length;
            let sumNodes = 0;
            for (let i=0; i<levelSize; i++)
            {
                let node = queue.shift();
                sumNodes = sumNodes+node.data;

                if (node.left)
                {
                    queue.push(node.left);
                }
                if (node.right)
                {
                    queue.push(node.right);
                }

            }
            result.push(sumNodes);
        }
        console.log(result);
        let evenSum = 0;
        let oddSum = 0;

        let n = result.length;
        for (let i=0; i<n; i++)
        {
            if (i%2 == 0)
            {
                evenSum = evenSum + result[i];
            }
            else
            {
                oddSum = oddSum + result[i];
            }

        }
        return Math.max(evenSum,oddSum);
    }
    
    
}

let t = new Tree();

t.root = new Node(3);

t.root.left = new Node(4);
t.root.left.left = new Node(1);
t.root.left.right = new Node(3);

t.root.right = new Node(5);
t.root.right.right = new Node(1);

console.log(t.Solution());