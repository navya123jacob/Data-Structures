var MyCircularQueue=function(k){
    this.queue=[];
    this.size=k;
}

MyCircularQueue.prototype.enQueue=function(value){
    if(this.size==this.queue.length){return false}
    this.queue.push(value)
    return true
}
MyCircularQueue.prototype.deQueue=function(value){
   if(this.queue.length==0){return false}
    this.queue.shift()
    return true
}
MyCircularQueue.prototype.Front=function(){
   if(this.queue.length==0){return false}
   return this.queue[0]
}

MyCircularQueue.prototype.Rear=function(){
   if(this.queue.length==0){return false}
   return this.queue[this.queue.length-1]
}

MyCircularQueue.prototype.isFull=function(){
   if(this.queue.length==0){return false}
   return this.size==this.queue.length
}

MyCircularQueue.prototype.isEmpty=function(){
  
   return this.queue.length==0
}

var obj=new MyCircularQueue(3)
obj.enQueue(1)
obj.enQueue(2)
obj.enQueue(3)
obj.enQueue(4)
console.log(obj.Front(),obj.Rear())
obj.deQueue()
obj.enQueue(5)
console.log(obj.Front(),obj.Rear())
