class Graph{//adjacency matrix
    constructor(numVertices){
        this.numVertices=numVertices
        this.adjMatrix=[]
    
    for(let i=0;i<this.numVertices;i++){
        this.adjMatrix[i]=new Array(this.numVertices).fill(0)
    }
    }

    add(i,j){
        if(i>=0 && j>=0 && i< this.numVertices && j< this.numVertices)
        {this.adjMatrix[i][j]=1 }
        else {
            console.error("Invalid indices:", i, j);
        }
    }
}
const mygraph=new Graph(5)
console.log(mygraph.numVertices)

mygraph.add(1,2)
mygraph.add(3,4)
mygraph.add(6,4)
console.log(mygraph.adjMatrix)