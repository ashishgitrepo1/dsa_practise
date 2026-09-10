class maxHeap
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

            if (data < parent)
            {
                break;
            }
            this.values[index] = parent;
            index = parentIndex;
        }
        this.values[index] = data;
        console.log(this.values);
    }
    Insert(num)
    {
        this.values.push(num);
        this.trickleUp();
    }
    trickleDown(index)
    {
        let data = this.values[index];
        let largeIndex;
        let n = this.values.length/2;

        while (index < n)
        {
            let leftIndex = 2*index + 1;
            let rightIndex = leftIndex + 1;

            if (rightIndex<this.values.length && this.values[rightIndex]>this.values[leftIndex])
            {
                largeIndex = rightIndex;
            }
            else
            {
                largeIndex = leftIndex;
            }
            if (data > this.values[largeIndex])
            {
                break;
            }
            this.values[index] = this.values[largeIndex];
            index = largeIndex;
        }
        this.values[index] = data;
    }
    Delete()
    {
        let toDelete = this.values[0];
        console.log("item deleted = ",toDelete);

        let data = this.values[this.values.length-1];
        this.values[0] = data;
        this.values.pop();
        this.trickleDown(0);
        console.log(this.values);
    }

}

let h = new maxHeap();
h.Insert(70);
h.Insert(40);
h.Insert(50);
h.Insert(20);
h.Insert(60);
h.Insert(100);
h.Insert(80);
h.Insert(30);
h.Insert(10);
h.Insert(90);
h.Insert(53);
h.Delete();
// h.Insert(51);
// h.Insert(95);