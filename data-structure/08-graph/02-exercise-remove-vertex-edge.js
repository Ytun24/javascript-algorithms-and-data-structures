/*
REMOVING AN EDGE

1. This function should accept two vertices, we'll call them vertex1 and vertex2
2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
3. The function should reassign the key of vertex2 to be an array that does not contain vertex1
4. Don't worry about handling errors/invalid vertices

REMOVING A VERTEX

1. The function should accept a vertex to remove
2. The function should loop as long as there are any other vertices in the adjacency list for that vertex
3. Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
4. delete the key in the adjacency list for that vertex
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  removeEdge(vertex1, vertex2) {
    var tempEdge = [];

    for (let vertex of this.adjacencyList[vertex1]) {
      if (vertex !== vertex2) tempEdge.push(vertex);
    }

    this.adjacencyList[vertex1] = tempEdge;
    tempEdge = [];

    for (let vertex of this.adjacencyList[vertex2]) {
      if (vertex !== vertex1) tempEdge.push(vertex);
    }

    this.adjacencyList[vertex2] = tempEdge;
  }

  removeVertex(vertex) {
    for (let connectedVertex of this.adjacencyList[vertex]) {
        this.removeEdge(connectedVertex, vertex);
    }

    delete this.adjacencyList[vertex]
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Bangkok");

console.log(g.adjacencyList);

g.addEdge("Tokyo", "Bangkok");
g.addEdge("Dallas", "Bangkok");

console.log(g.adjacencyList);

g.removeEdge("Bangkok", "Tokyo");

console.log(g.adjacencyList);

g.removeVertex("Bangkok");

console.log(g.adjacencyList);