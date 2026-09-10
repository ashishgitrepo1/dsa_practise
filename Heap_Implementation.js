class Heap
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
            //this.values[parentIndex] = this.values[index];
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
        let largeIndex;
        // let n = this.values.length/2;

        while (index < this.values.length/2)
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
            console.log("large index = ",largeIndex, this.values[largeIndex]);
            if (data >= this.values[largeIndex] || this.values[largeIndex]===undefined)
            {
                break;
            }
            this.values[index] = this.values[largeIndex];
            // this.values[largeIndex] = data;
            index = largeIndex;
        }
        this.values[index] = data;
    }
    Delete()
    {
        let toDelete = this.values[0];
        
        //this.values.shift();
        let data = this.values[this.values.length -1 ];
        //this.values.pop();
        this.values[0] = data;
        
        this.values.pop();
        console.log("before deleting = ",this.values);
        this.trickleDown(0);
    }
    Display()
    {
        let output = [];
        for (let i = 0; i < this.values.length; ++i)
        {
            //if (this.values[i] != undefined)
            //{
                output.push(this.values[i]);
            //}
            
        }
        console.log(output);
    }
}
let h = new Heap();
h.Insert(1);
h.Insert(2);
// h.Insert(63);
// h.Insert(82);
// h.Insert(55);
// h.Insert(37);
// h.Insert(10);
// h.Insert(43);
// h.Insert(27);
// h.Insert(30);
// h.Insert(34);
// h.Insert(95);
h.Display();
h.Delete();
h.Display();
console.log("after removing the Max element = ");
h.Display();
// h.Insert(400);
// h.Insert(300);
h.Display();
