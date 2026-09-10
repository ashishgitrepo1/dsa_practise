class minHeap
{
    constructor()
    {
        this.values = [];
    }
    trickleUp()
    {
        let index = this.values.length - 1;
        let data = this.values[index];

        while (index > 0)
        {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];

            if (parent < data)
            {
                break;
            }
            this.values[index] = parent;
            index = parentIndex;

        }
        this.values[index] = data;
    }
    Insert(data)
    {
        this.values.push(data);
        this.trickleUp();
    }
    trickleDown(index)
    {
        let data = this.values[index];
        let smallIndex;
        let n = this.values.length/2;

        while (index < n)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = 2*index + 2;

            if (rightIndex<this.values.length && this.values[leftIndex]<this.values[rightIndex])
            {
                smallIndex = leftIndex;
            }
            else
            {
                smallIndex = rightIndex;
            }
            if (data < this.values[smallIndex] || this.values[smallIndex]===undefined)
            {
                break;
            }
            this.values[index] = this.values[smallIndex];
            index = smallIndex;
        }
        this.values[index] = data;
    }

    Delete()
    {
        let del = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        if (this.values.length > 0)
        {
            this.trickleDown(0);
        }
        else
        {
            return [];
        }
        
    }

    Display()
    {
        console.log(this.values);
    }
    
}
let heap = new minHeap()
heap.Insert(2);
heap.Insert(5);
//heap.Insert(2);
heap.Insert(3);
heap.Insert(8);
heap.Display();
console.log("after delete");
heap.Delete();
heap.Delete();
//heap.Delete();
//heap.Delete();
heap.Display();
