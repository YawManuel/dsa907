**6. Graphs**

Graphs consist of a collection of nodes (vertices) connected by edges and can be either directed or undirected.

   - **Types:**
     - **Undirected Graph** (connections are bidirectional)
     - **Directed Graph (DAG - Directed Acyclic Graph)**
     - **Weighted Graph** (edges have weights)
   - **Representation:**
     - **Adjacency List** (better for sparse graphs)
     - **Adjacency Matrix** (better for dense graphs)
   - **Graph Traversal Algorithms:**
     - **Depth-First Search (DFS)**
     - **Breadth-First Search (BFS)**
     - **Dijkstra’s Algorithm** (Shortest Path)
     - **Topological Sorting** (for scheduling problems)

*Example:*

```javascript
// Adjacency List
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
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');

//Adjacency Matrix


```