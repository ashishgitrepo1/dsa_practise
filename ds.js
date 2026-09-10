class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}
class List
{
    constructor()
    {
        this.head = null;
    }
    InsertLast(data)
    {
        let newNode = new Node(data);
        let current = this.head;

        if(this.head == null)
        {
            this.head = newNode;
        }
        else
        {
            while(current.next != null)
            {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    InsertFirst(data)
    {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        
    }
    Delete(data)
    {
        let previous = null;
        let current = this.head;
        if(this.head == null)
        {
            return null;
        }
        else
        {
            while(current.data != data)
            {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        return current;
    }
    Search(data)
    {
        let current = this.head;
        while(current != null && current.data != data)
        {
            current = current.next;
        }
        if(current == null)
        {
            return null;
        }
        else
        {
            return current;
        }
    }
    InsertAfter(target,data)
    {
        let newNode = new Node(data);
        if(this.head == null)
        {
            this.head = newNode;
        }
        else
        {
            let current = this.head;
            while(current.data != target)
            {
                current = current.next;
                if(current == null)
                    {
                        return null;
                    }
            }
            
          
                let item = current.next;
                current.next = newNode;
                newNode.next = item
                return current;
            
            
        }
    }
    Display()
    {
        let current = this.head;
        let output = []
        while(current != null)
        {
            output.push(current.data);
            current = current.next;
        }
        console.log(output);
    }
}

let newList = new List();
newList.InsertLast(2);
newList.InsertLast(4);
newList.InsertFirst(56);
newList.Display();
let del = newList.Delete(2);
if (del == null)
{
    console.log('item not found');
}
else
{
    console.log('item deleted = ',del.data);
}
newList.Display();
let search = newList.Search(56);
if (search == null)
{
    console.log("item not found");
}
else
{
    console.log("item found successfully");
}

let insert = newList.InsertAfter(4,46);
if (insert == null)
{
    console.log('item not inserted');
}
else
{
    console.log('item inserted successfully = ', insert.data);
}
newList.Display();
