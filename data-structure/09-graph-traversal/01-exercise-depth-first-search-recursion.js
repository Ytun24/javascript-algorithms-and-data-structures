/*
Depth First Traversal
Recursive

1. The function should accept a starting node
2. Create a list to store the end result, to be returned at the very end
3. Create an object to store visited vertices
4. Create a helper function which accepts a vertex
   4.1 The helper function should return early if the vertex is empty
   4.2 The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
   4.3 Loop over all of the values in the adjacencyList for that vertex
   4.4 If any of those values have not been visited, recursively invoke the helper function with that vertex
5. Invoke the helper function with the starting vertex
6. Return the result array
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  depthFirstGraphRecursion(startVertex) {
    var result = [];
    var visitedVertices = {};
    // solve problem about undefined this keyword in helper function 
    var adjacencyList = this.adjacencyList;

    function depthFirstSearch(vertex) {
      if (!vertex) return undefined;

      visitedVertices[vertex] = true;
      result.push(vertex);

      for (let currentVertex of adjacencyList[vertex]) {
          if (!visitedVertices[currentVertex]) {
              depthFirstSearch(currentVertex)
          }
      }
    }

    depthFirstSearch(startVertex);

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList);


console.log(g.depthFirstGraphRecursion("A"));

// Result: [ 'A', 'B', 'D', 'E', 'C', 'F' ]