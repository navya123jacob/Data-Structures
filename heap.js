class Heap{
    constructor(){
       this.heap=[]
    }
    
    push(e){
       this.heap.push(e)
       this.heapifyup()
    }
    heapifyup(){
       let current=this.heap.length-1
       while(current>0){
       let parent=Math.floor((current-1)/2)
       if(parent>=0 && this.heap[parent]<this.heap[current]){
        [this.heap[current],this.heap[parent]]=[this.heap[parent],this.heap[current]]
        current=parent
       }
       else{break;}
       }
    }
    
    leftchild(i){
       return 2*i+1
    }
    rightchild(i){
       return 2*i+2
    }
    
    delete(){
       if(!this.heap.length){
          return
       }
       if(this.heap.length==1){
          this.heap.pop()
          return
       }
       let elem=this.heap.pop()
       let deleted=this.heap[0]
       this.heap[0]=elem
       this.heapifydown()
       return deleted
    
    }
    heapifydown() {
       let current = 0,len=this.heap.length
       while (true) {
           let big = current;
           const leftChild = this.leftchild(current);
           const rightChild = this.rightchild(current);
    
           if (leftChild <len && this.heap[leftChild] > this.heap[big]) {
               big = leftChild;
           }
           if (rightChild <len && this.heap[rightChild] > this.heap[big]) {
               big = rightChild;
           }
    
           if (big !== current) {
               [this.heap[big], this.heap[current]] = [this.heap[current], this.heap[big]];
               current = big;
           } else {
               return;
           }
       }
    }
    
    heapsort(arr){
       let sortheap=new Heap()
       arr.forEach((e)=>{sortheap.push(e)})
      
       let sorted=[]
       while(sortheap.heap.length){
         
       sorted.unshift(sortheap.heap[0])
       sortheap.delete()
       }
    return sorted
    }
    
    }
    
    let myheap=new Heap()
    console.log(myheap.heap)
    myheap.delete()
    myheap.push(8)
    myheap.push(3)
    myheap.push(10)
    myheap.push(11)
    myheap.push(9)
    myheap.push(7)
    myheap.push(1)
    myheap.push(4)
    myheap.push(5)
    console.log(myheap.heap)
    myheap.delete()
    myheap.delete()
    myheap.delete()
    console.log(myheap.heap)
    console.log(myheap.heapsort([45,23,177,654,34,2]))
    