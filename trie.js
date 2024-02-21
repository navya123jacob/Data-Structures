class Node{
    constructor(){
        this.keys=new Map()
        this.end=false
    }
   
}

class Trie{
constructor(){
this.root=new Node()
}
add(word,node=this.root){
    if(!word.length){
     node.end=true  
     return 
    }
    
        let c=word[0]
        if(!node.keys.has(c)){
          node.keys.set(c,new Node())
         
        }
          return this.add(word.slice(1),node.keys.get(c))
}

isword(word,node=this.root){
    if(!word.length ){
       return node.end
    }
    let c=word[0]
    if(!node.keys.has(c)){
       return false
    }
    return this.isword(word.slice(1),node.keys.get(c))
 }
printWords(node = this.root, word = '', arr = []) {
    if (node.end) {
        arr.push(word);
    }
    for (let [char, childNode] of node.keys) { //k,v
        this.printWords(childNode, word + char, arr);
    }
    return arr;
}


delete(word, node = this.root, index = 0) {
    if (index === word.length) {
        if (!node.end) {
           
            return false;
        }
        node.end = false; 
        return node.keys.size === 0; 
    }

    let char = word[index];
    if (!node.keys.has(char)) {
        return false;
    }

    let shouldDeleteNode = this.delete(word, node.keys.get(char), index + 1);

    if (shouldDeleteNode) {
        node.keys.delete(char);
        return node.keys.size === 0 && !node.isEndOfWord;
    }

    return false;
}

prefixwords(pref) {
    let node = this.findnode(pref);
    if (!node) return [];
    let array=[];
    
    this.printWords(node, pref, array);
    return array;
}

 findnode(pref){
    let node=this.root
    for(let i=0;i<pref.length;i++){
       if(!node.keys.has(pref[i])){
          return null
       }
       node=node.keys.get(pref[i])
    }
    return node
 }

}

let mytrie=new Trie()
console.log(mytrie.root)
mytrie.add("Navya",mytrie.root)
mytrie.add("Navin",mytrie.root)
mytrie.add("Ayan",mytrie.root)
mytrie.add("A",mytrie.root)
console.log(mytrie.root)
console.log(mytrie.isword("Navya"))
console.log(mytrie.printWords())
console.log(mytrie.delete("Nav"))
console.log(mytrie.printWords())

console.log(mytrie.prefixwords("A"))
console.log(mytrie.prefixwords("Na"))