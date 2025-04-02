Definition of Search Algorithm
A search algorithm is a method used to find a specific element within a data structure. It determines whether the element exists and, if so, returns its position.

Types of Search Algorithms
Search algorithms are broadly classified into:

Linear Search - Simple and sequential search.

Binary Search - Efficient search in sorted data.

Jump Search - Optimized version of binary search.

Interpolation Search - Used for uniformly distributed data.

Exponential Search - Fast search for unbounded data.

Depth-First Search (DFS) - Used for traversing graphs & trees.

Breadth-First Search (BFS) - Used for traversing graphs & trees.

Examples of Search Algorithms
1. Linear Search (Brute force approach)
Description: Checks each element one by one.

Time Complexity: O(n)

Data Structure Used: Array, Linked List

javascript
Copy
Edit
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Found the target
  }
  return -1; // Not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
2. Binary Search (Divide and conquer)
Description: Works only on sorted arrays by repeatedly dividing the search space in half.

Time Complexity: O(log n)

Data Structure Used: Sorted Array

javascript
Copy
Edit
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid; // Found the target
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1; // Not found
}

console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
3. Jump Search (Optimized for large sorted datasets)
Description: Skips elements in jumps to reduce comparisons.

Time Complexity: O(√n)

Data Structure Used: Sorted Array

javascript
Copy
Edit
function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1; // Not found
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  return arr[prev] === target ? prev : -1;
}

console.log(jumpSearch([10, 20, 30, 40, 50], 30)); // Output: 2
4. Interpolation Search (For uniformly distributed data)
Description: Like binary search, but predicts the position instead of dividing in half.

Time Complexity: O(log log n) for uniformly distributed data.

Data Structure Used: Sorted Array

javascript
Copy
Edit
function interpolationSearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  
  return -1; // Not found
}

console.log(interpolationSearch([10, 20, 30, 40, 50], 30)); // Output: 2
5. Exponential Search (Efficient for unknown data size)
Description: Doubles the search range, then applies binary search.

Time Complexity: O(log n)

Data Structure Used: Sorted Array

javascript
Copy
Edit
function exponentialSearch(arr, target) {
  let n = arr.length;
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < n && arr[i] <= target) i *= 2;

  return binarySearch(arr.slice(i / 2, Math.min(i, n)), target);
}

console.log(exponentialSearch([10, 20, 30, 40, 50], 30)); // Output: 2
6. Depth-First Search (DFS) (For Graphs and Trees)
Description: Goes as deep as possible before backtracking.

Time Complexity: O(V + E) (Vertices + Edges)

Data Structure Used: Graph, Tree

javascript
Copy
Edit
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex, neighbor) {
    this.adjList.get(vertex).push(neighbor);
  }

  dfs(start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);

    for (let neighbor of this.adjList.get(start)) {
      this.dfs(neighbor, visited);
    }
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

graph.dfs('A'); // Output: A B C
7. Breadth-First Search (BFS) (For Graphs and Trees)
Description: Explores all neighbors before moving deeper.

Time Complexity: O(V + E) (Vertices + Edges)

Data Structure Used: Graph, Tree

javascript
Copy
Edit
class GraphBFS {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex, neighbor) {
    this.adjList.get(vertex).push(neighbor);
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set(queue);

    while (queue.length) {
      let node = queue.shift();
      console.log(node);

      for (let neighbor of this.adjList.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

let graphBFS = new GraphBFS();
graphBFS.addVertex('A');
graphBFS.addVertex('B');
graphBFS.addVertex('C');
graphBFS.addEdge('A', 'B');
graphBFS.addEdge('A', 'C');

graphBFS.bfs('A'); // Output: A B C
Which Data Structures Are Used in Search Algorithms?
Search Algorithm	Data Structure Used
Linear Search	Array, Linked List
Binary Search	Sorted Array
Jump Search	Sorted Array
Interpolation Search	Sorted Array
Exponential Search	Sorted Array
Depth-First Search (DFS)	Graph, Tree
Breadth-First Search (BFS)	Graph, Tree