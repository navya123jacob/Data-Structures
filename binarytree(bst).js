class Node{
    constructor(data){
    this.val=data
    this.right=null
    this.left=null
    }
}
class Binary{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root==null
    }
    add(e){
        let node=new Node(e)
        if(this.isempty()){
            this.root=node
            return
        }
         this.addnewnode(this.root,node)
    }
    addnewnode(current,node){
        if(node.val<current.val){
            if(current.left==null){
                current.left=node
            }
            else{
                this.addnewnode(current.left,node)
            }
        }
        else if(node.val>current.val){
            if(current.right==null){
                current.right=node
            }
            else{
                this.addnewnode(current.right,node)
            }
        }
        else{
            return
        }
    }

    search(root,e){
        
         if (!root){
            return false
        }
        if(root.val==e ){
            return true
        }
        else if(e<root.val){
           return this.search(root.left,e)
        }
        else if(e>root.val){
           return this.search(root.right,e)
        }
        
    }
    
    preorder(root){
        if(root==null){
            return []
        }
        let result=[root.val]
        result=result.concat(this.preorder(root.left))
        result=result.concat(this.preorder(root.right))
        return result
    }
    inorder(root){
        if(root==null){
            return []
        }
        let result=[]
        result=result.concat(this.inorder(root.left))
        result.push(root.val)
        result=result.concat(this.inorder(root.right))
        return result
    }

    postorder(root){
        if(root==null){
            return []
        }
        let result=[];
        result=result.concat(this.postorder(root.left))
        result=result.concat(this.postorder(root.right))
        result.push(root.val)
        return result
        
    }

    breadthorder(root){
        let result=[];
        let queue=[root]
        while(queue.length){
            let current=queue.shift();
            result.push(current.val)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
          
        }
        return result 
    }

    minnode(root){
        if(!root.left){
            return root.val
        }
        return this.minnode(root.left)
    }
 
    maxnode(root){
        if(!root.right){
            return root.val
        }
        return this.maxnode(root.right)
    }
   delete(root,target){
    if(!root){
        return root
    }
    if(target<root.val){
        root.left=this.delete(root.left,target)
    }
    else if(target>root.val){
        root.right=this.delete(root.right,target)
    }
    else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }
 
        
        root.val =this.minnode(root.right);
       
        root.right = this.delete(root.right, root.val);
    }
    return root
   }

   closest(root,elem){
    if(!root){return null}
    let close=root.val
     if(elem<root.val && root.left){
        let left=this.closest(root.left,elem)
        if(left!=null && Math.abs(left-elem)<Math.abs(close-elem)){
            close=left
        }
     }
     else if(elem>root.val && root.right){
        let right=this.closest(root.right,elem)
        if(right!=null && Math.abs(right-elem)<Math.abs(close-elem)){
            close=right
        }
     }
    return close
   }

   isBst(root){
    let arr=this.inorder(root)
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){return false}
    }
    return true
   }
}

let bin=new Binary()

bin.add(9)
bin.add(5)
bin.add(14)
bin.add(11)
bin.add(3)
bin.add(6)

// console.log(bin.search(bin.root,14))
// console.log(bin.search(bin.root,6))
// console.log(bin.search(bin.root,1))
// console.log(bin.preorder(bin.root))
// console.log(bin.inorder(bin.root))
// console.log(bin.postorder(bin.root))

// console.log(bin.maxnode(bin.root))
// console.log(bin.delete(bin.root,11))
console.log(bin.inorder(bin.root))
console.log(bin.closest(bin.root,2))
console.log(bin.isBst(bin.root))