class Graph{
    constructor(){
        this.adjacencylist={}
    }

    addVertex(vertex){
        if(!(this.adjacencylist[vertex])){
            this.adjacencylist[vertex]=new Set()
        }
    }

    addEdge(ver1,ver2){
        if(!this.adjacencylist[ver1]){
            this.addVertex(ver1)
        }
        if(!this.adjacencylist[ver2]){
            this.addVertex(ver2)
        }
        this.adjacencylist[ver1].add(ver2)
        this.adjacencylist[ver2].add(ver1)
    }

    display(){
        for(let v in this.adjacencylist){
            console.log(v,'==>',[...this.adjacencylist[v]] )
        }
    }
    hasEdge(v1,v2){
        return this.adjacencylist[v1] && this.adjacencylist[v1].has(v2)

    }

    removeEdge(v1,v2){
        this.adjacencylist[v1].delete(v2)
        this.adjacencylist[v2].delete(v1)
    }
    removevertex(v){
        if(!this.adjacencylist[v]){
            return
        }
        for(let adjvertex of this.adjacencylist[v]){
            this.removeEdge(v,adjvertex)
        }
        delete this.adjacencylist[v]
    }

    bfs(vertex){
        let visited={}
        let queue=[vertex]
         visited[vertex]=true
        while(queue.length){
        let current=queue.shift()
        console.log(current)
        for(let v of this.adjacencylist[current]){
            if(!visited[v]){
                visited[v]=true
                queue.push(v)
            }

        }
        }
    }
    dfs(vertex,visited={}){
        console.log(vertex)
        visited[vertex]=true
        for(let neighbour of this.adjacencylist[vertex]){
            if(!visited[neighbour ])
            {
                this.dfs(neighbour,visited)
            }
        }
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addEdge('B','A');
myGraph.addEdge('C','A');

console.log(myGraph.adjacencylist)

myGraph.display()

console.log(myGraph.hasEdge('A','B'))
myGraph.display()
myGraph.dfs('C')