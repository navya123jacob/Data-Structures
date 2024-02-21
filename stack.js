class Stack{
    constructor(){
        this.stack=[]
    }
    push(e){
        this.stack.push(e)
    }
   empty(){
    return this.size()==0
   }
   pop(){
    if(this.empty()){
        
        return  'empty'
    }
    return this.stack.pop()
   }
   peek(){
    if(this.empty()){
        console.log('empty')
        return  
    }
    return this.stack[this.size()-1]
   }
   size(){
    return this.stack.length
   }
   display(){
    console.log(this.stack)
   }
}

let mystack=new Stack()
mystack.push(1)
mystack.push(3)
mystack.push(4)
mystack.push(5)
mystack.push(6)
mystack.push(7)
console.log(mystack.peek())
mystack.pop()
console.log(mystack.peek())

mystack.display()