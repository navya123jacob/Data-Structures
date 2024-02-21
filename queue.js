class Stack{
    constructor(){
        this.stack=[]
    }

    enqueue(e){
        this.stack.push(e)
    }

    empty(){
        return this.size()==0
    }

    size(){
        return this.stack.length
    }
    dequeue(){
        if(this.empty()){
            return "empty"
        }
        return this.stack.shift()
    }
    front(){
        if(this.empty()){
            return "empty"
        }
        return this.stack[0]
    }
    display(){console.log(this.stack)}

    reverse(){
        if(!this.empty()){
            const front=this.dequeue()
            this.reverse()
            this.enqueue(front)
        }
        return this.stack
    }
}
let mystack=new Stack()
mystack.enqueue(1)
mystack.enqueue(2)
mystack.enqueue(3)
mystack.enqueue(4)
mystack.enqueue(5)
console.log(mystack.front())

mystack.dequeue()
console.log(mystack.front())
mystack.reverse()
mystack.display()
