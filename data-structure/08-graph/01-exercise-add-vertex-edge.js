/*
ADDING A VERTEX

1. Write a method called addVertex, which accepts a name of a vertex
2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array


ADDING AN EDGE

1. This function should accept two vertices, we can call them vertex1 and vertex2
2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
4. Don't worry about handling errors/invalid vertices
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) { 
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
}


var graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

console.log(graph);

graph.addEdge("B","C");
graph.addEdge("A","C");

console.log(graph);

/* Example
{ adjacencyList: { A: [], B: [], C: [] } }

{ adjacencyList: { A: [ 'C' ], B: [ 'C' ], C: [ 'B', 'A' ] } }
*/