var hash=(key,max)=>{
    var hash=0
    for(var i=0;i<key.length;i++){
        hash+=key.charCodeAt(i)
    }
    return hash%max
}

let HashTable=function(){
    let storage=[]
    const storagelimit=4;
    this.print=function(){
        console.log(storage)
    }

    this.add=function(key,value){
        let index=hash(key,storagelimit)
        if(storage[index]==undefined){
            storage[index]=  [[key,value]]
        }
        else{let present=false
            for(let i=0;i<storage[index].length;i++) //to check if index exist and the sam ekey is present
           {
            if(storage[index][i][0]==key){
            storage[index][i][1]=value
            present=true
            break;
           }

           }
           if(present==false){  //if key not present push
            storage[index].push([key,value])
           }
        }
    }

    this.remove=function(key){
        let index=hash(key,storagelimit)
        
            if(storage[index].length==1 &&storage[index][0][0]==key){
                delete storage[index]
            }
            else
            {for(let i=0;i<storage[index].length;i++){
                if(storage[index][i][0]==key){
                    storage[index].splice(i, 1);
                    break;
                }
            }}
        
    }
this.lookup=function(key){
    let index=hash(key,storagelimit)
    if(storage[index]==undefined){
        return undefined
    }
    else{
            for(let i=0;i<storage[index].length;i++){
                if(storage[index][i][0]==key){
                    return storage[index][i][1]
                }
            
        }
    }
}

this.addarray=function(array){
    for(let i=0;i<array.length;i++){
        this.add(i,array[i])
    }
}
this.find=function(){
    let ob={}
    for(let k=0;k<storage.length;k++){
      let bucket=storage[k]
      if(bucket && bucket.length>0){
        for(let i=0;i<bucket.length;i++){
            ob[bucket[i][1]]=ob[bucket[i][1]]?ob[bucket[i][1]]+1:1
        }
      }
    }
    console.log(ob)
    for(let key in ob){
        if(ob.hasOwnProperty(key) && ob[key]>1){
            console.log(key)
        }
    }
    
}

}
let arr=[5,1,2,5,4,7,8,5]
let myhashtable=new HashTable()
myhashtable.addarray(arr)

myhashtable.print()
myhashtable.find()
// myhashtable.add('key1','navya')
// myhashtable.add('ind2','vishnu')
// myhashtable.add('ind3','dhanu')
// myhashtable.add('ind3','john')
// myhashtable.add('newkey','jaya')
// myhashtable.print()
// console.log(myhashtable.lookup('ind3'))
// console.log(myhashtable.lookup('newkey'))
// myhashtable.remove('newkey')
// myhashtable.remove('ind3')

// myhashtable.print()
// console.log(myhashtable.lookup('ind3'))
// console.log(myhashtable.lookup('newkey'))