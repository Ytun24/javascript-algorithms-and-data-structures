/*
Dijkstra's Pseudocode

1. This function should accept a starting and ending vertex
2. Create an object (we'll call it distances) and 
   set each key to be every vertex in the adjacency list with a value of infinity, 
   except for the starting vertex which should have a value of 0.

3. After setting a value in the distances object, 
   add each vertex with a priority of Infinity to the priority queue, 
   except the starting vertex, which should have a priority of 0 because that's where we begin.

4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null

5. Start looping as long as there is anything in the priority queue
   5.1 dequeue a vertex from the priority queue
   5.2 If that vertex is the same as the ending vertex - we are done!
   5.3 Otherwise loop through each value in the adjacency list at that vertex
       5.3.1 Calculate the distance to that vertex from the starting vertex
       5.3.2 if the distance is less than what is currently stored in our distances object
             update the distances object with new lower distance
             update the previous object to contain that vertex
             enqueue the vertex with the total distance from the start node
*/

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  findShortestPath(start, end) {
    var distance = {};
    var priorityQueue = new PriorityQueue();
    var previous = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      var vertexQueue = priorityQueue.dequeue();

      if (vertexQueue.val === end) break;
      for (let neighbor of this.adjacencyList[vertexQueue.val]) {
        // from solution sum candidate first
        let candidate = neighbor.weight + distance[vertexQueue.val];

        if (distance[neighbor.node] > candidate) {
          distance[neighbor.node] = candidate;
          previous[neighbor.node] = vertexQueue.val;
          priorityQueue.enqueue(neighbor.node, distance[neighbor.node]);
        }
      }
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList);

graph.findShortestPath("A", "E");

// ["A", "C", "D", "F", "E"]
