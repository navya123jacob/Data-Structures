class Node{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}
class Link{
    constructor(){
        //starting
        this.head=null
    }
    addfirst(data){
        let newnode=new Node(data)
        if(this.head==null)
        {
            this.head=newnode
            return
        }
        newnode.next=this.head
        this.head=newnode
    }

    addlast(data)
    {
        let newnode=new Node(data)
        let current=this.head
        while(current.next!=null)
        {
            current=current.next
        }
        current.next=newnode

    }
    addindex(data,ind)
    {
        let newnode=new Node(data)
        let current=this.head
        for(let i=0;i<ind-1;i++)
        {
            current=current.next
        }
        newnode.next=current.next
        current.next=newnode
    }
    removetop(){
    if(this.head==null)
    {
        return
    }
    let second=this.head.next
    this.head=second
    }

    removebottom(){
        let current=this.head
        let prev=null
        while(current.next!=null)
        {
            prev=current
            current=current.next
        }
        prev.next=null
    }
    removeatindex(ind){
        let current=this.head
        let prev=null
        while(current.next!=null)
        {
            prev=current
            current=current.next
        }
        prev.next=current.next
    }
    display(){
        let current=this.head
        while(current!=null)
        {
            console.log(current.data)
            current=current.next
        }
    }

    reverse(){
        let current=this.head
        let prev=null
        while(current!=null)
        {
            let nextnode=current.next
          
            current.next=prev
            prev=current
            current=nextnode
        }
        this.head=prev

    }
}

let mylist=new Link()
mylist.addfirst(6)
mylist.addfirst(7)
mylist.addlast(8)
mylist.addindex(1,1)
mylist.removetop()
mylist.removebottom()
mylist.addindex(3,1)
mylist.removeatindex(1)
mylist.reverse()
mylist.display()
