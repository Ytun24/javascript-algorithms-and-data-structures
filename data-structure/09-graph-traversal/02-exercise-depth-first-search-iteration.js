/*
Depth First Traversal
Iterative

1. The function should accept a starting node
2. Create a stack to help use keep track of vertices (use a list/array)
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Add the starting vertex to the stack, and mark it visited
6. While the stack has something in it:
   6.1 Pop the next vertex from the stack
   6.2 If that vertex hasn't been visited yet:
       6.2.1 ​Mark it as visited
       6.2.2 Add it to the result list
       6.2.3 Push all of its neighbors into the stack
7. Return the result array
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

  depthFirstIteration(start) {
    const result = [];
    const visited = {};
    let stack = [];
    const adjacencyList = this.adjacencyList;

    stack.push(start);

    while (stack.length > 0) {
      var vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true; 
        result.push(vertex)
        // from solution should check visited before push all neighbor
        stack.push(...adjacencyList[vertex]);
      }
    }

    // same result but have duplicate item stack
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

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.depthFirstIteration("A"));
// Result: [ 'A', 'C', 'E', 'F', 'D', 'B' ]
