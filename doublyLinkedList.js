class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
class List
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    InsertLast(data)
    {
        let newNode = new Node(data);
        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

    }
    InsertFirst(data)
    {
        let newNode = new Node(data);
        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
    }
    Search(data)
    {
        let current = this.head;
        if(this.head == null)
        {
            return null;
        }
        while(current.data != data)
        {
            current = current.next;
            if (current == null)
            {
                return null;
            }
        }
        return current;
    }
    InsertAfter(target, data)
    {
        let newNode = new Node(data);
        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
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
            if (item == null)
            {
                current.next = newNode;
                newNode.previous = current;
            }
            else
            {
                current.next = newNode;
                newNode.next = item;
                item.previous = newNode;
                newNode.previous = current;
                return current;
            }
            
        }
    }
    Delete(data)
    {
        let current = this.head;
        if(this.head == null)
        {
            return null;
        }
        else
        {
            while(current.data != data)
            {
                current = current.next;
                if(current == null)
                {
                    return null;
                }
            }
            current.previous.next = current.next;
            current.next.previous = current.previous;
            return current;
        }
    }
    Display()
    {
        let current = this.head;
        let output = [];
        while(current != null)
        {
            output.push(current.data);
            current = current.next;
        }
        console.log(output);
    }
}

newList = new List();
newList.InsertFirst(56);
newList.InsertFirst(5);
newList.InsertLast(67);
newList.InsertAfter(67,1);
newList.Display();

let del = newList.Delete(56);
if (del == null)
{
    console.log('item to be deleted not found');
}
else
{
    console.log('item deleted = ', del.data);
}
newList.Display();