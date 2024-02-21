class Node{
    constructor(data){
        this.data=data;
        this.next=null
        this.prev=null
    }
}

class dlink{
    constructor(){
        this.head=null
    }

    addfirst(data){
        let newnode=new Node(data)
        
       
       if(this.head)
       {
         newnode.next=this.head
        this.head.prev=newnode
       }
       this.head=newnode
    }

    addlast(data){
        let newnode =new Node(data)
        if(!this.head){
            this.head=newnode
        }
       
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=newnode
        newnode.prev=current
    }
    size(){
       let count=0;
        let current=this.head
        while(current.next)
        {
            count++;
            current=current.next
        }
       return count 
    }

    addindex(data,index){
        if(index<0 || index>=this.size())
        {
            console.error("invalid")
            return
        }
        let newnode=new Node(data)
        if(index==0)
        {
            newnode.next=this.head
            this.head.prev=newnode
            this.head=newnode
            
            return
        }

        
        let current=this.head
        for(let i=0;i<index-1;i++)
        {
            current=current.next
        }

        newnode.next=current.next
        current.next=newnode
        newnode.prev=current
    }

    removetop(){
        if(!this.head)
        {
            return
        }
        let current=this.head
        this.head=current.next
        current.next.prev=this.head
    }

    removelast(){
        if(!this.head)
        {
            return
        }
        let current=this.head
        while(current.next)
        {
            current=current.next
        }

        current.prev.next=null

    }

    removeindex(index){
        if(index<0 || index>=this.size())
        {
            console.error("invalid")
        }
        let current=this.head
       for(let i=0;i<index-1;i++)
       {
        current=current.next
       }
       if(current.next.next==null)
       {
        current.next=null
        return

       }
       current.next=current.next.next
       current.next.prev=current
    }

    display()
    {
        let current=this.head;
        while(current)
        {
            console.log(current.data)
            current=current.next
        }

    }
    reverse(){
        let current=this.head
        let prev=null
        while(current){
          let nextnode=current.next
          current.next=prev
          current.prev=nextnode
          prev=current
          current=nextnode
        }
        this.head=prev
        prev.prev=this.head
    }
}

const mylist=new dlink()
mylist.addfirst(3)
mylist.addlast(5)
mylist.addlast(6)
mylist.addindex(4,1)
mylist.removetop()
mylist.removeindex(1)
mylist.addindex(3,0)
mylist.reverse()

mylist.display()