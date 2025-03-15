### **Core Data Structures in JavaScript (For Turing Interview Test)**  

Understanding these data structures will help you solve algorithmic problems efficiently. Below is a breakdown of each:

---

### **1. Arrays & Strings**
   - **Arrays:** A collection of elements stored in contiguous memory locations.
     - **Common Operations:** Insertion, deletion, searching, sorting.
     - **Key Algorithms:** 
       - **Sliding Window** (e.g., finding the longest subarray with a sum ≤ k)
       - **Two-Pointer Technique** (e.g., checking if an array is a palindrome)
   - **Strings:** A sequence of characters, often treated as an array of characters.
     - **Common Algorithms:** 
       - **Reversal algorithms** (`reverse()` method, two-pointer technique)
       - **Substring search** (`indexOf()`, `includes()`)
       - **Anagram checks** (sorting, hash maps for frequency counting)

---

### **2. Linked Lists**
   - A collection of nodes where each node contains a value and a pointer to the next node.
   - **Types:**
     - **Singly Linked List**: Each node points to the next node.
     - **Doubly Linked List**: Each node has pointers to both next and previous nodes.
     - **Circular Linked List**: The last node points back to the head.
   - **Key Algorithms:**
     - Reversing a linked list
     - Detecting a cycle (Floyd’s Cycle Detection)
     - Finding the middle of a linked list (Fast/Slow pointer technique)

---

### **3. Stacks & Queues**
   - **Stack (LIFO - Last In First Out)**
     - Used for backtracking, undo/redo functionality, DFS.
     - Can be implemented using an array or a linked list.
     - **Operations:** `push()`, `pop()`, `peek()`
     - **Example:** Checking balanced parentheses in an expression.

   - **Queue (FIFO - First In First Out)**
     - Used in scheduling tasks, BFS traversal, and message queues.
     - **Operations:** `enqueue()`, `dequeue()`, `peek()`
     - **Example:** Implementing a task scheduler.

   - **Monotonic Stack/Queue:**
     - Helps in problems like "Next Greater Element" and "Sliding Window Maximum."

---

### **4. Hash Tables (Objects & Maps)**
   - Data structure that stores key-value pairs for quick lookups.
   - **JS Implementations:** 
     - **Objects (`{}`)** → Keys are strings.
     - **Maps (`new Map()`)** → Keys can be any type.
   - **Key Algorithms:**
     - Finding duplicates in an array.
     - Counting character frequencies in a string.
     - Implementing a simple cache (LRU Cache).

---

### **5. Graphs**
   - A collection of nodes (vertices) connected by edges.
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

---

### **6. Trees & Binary Search Trees (BST)**
   - **Tree:** A hierarchical data structure with nodes.
   - **Binary Tree:** Each node has at most two children.
   - **Binary Search Tree (BST):** A binary tree where left < root < right.
   - **Common Tree Traversal Methods:**
     - **Inorder (Left → Root → Right)** → Sorted order for BST
     - **Preorder (Root → Left → Right)** → Used for cloning/copying trees
     - **Postorder (Left → Right → Root)** → Used for deleting nodes
   - **Key Algorithms:**
     - Finding the lowest common ancestor (LCA)
     - Checking if a tree is balanced
     - Finding the diameter of a tree

---

### **7. Heaps & Priority Queues**
   - **Heap:** A tree-based structure that maintains a specific order (min/max).
   - **Priority Queue:** An advanced queue where elements are dequeued based on priority.
   - **Key Algorithms:**
     - **Heap Sort**
     - **Finding the k-th largest/smallest element in an array**
     - **Dijkstra’s Algorithm (uses a priority queue for shortest path)**

---

### **8. Tries (Prefix Trees)**
   - A tree-like data structure used for storing dynamic strings.
   - **Common Use Cases:**
     - Autocomplete feature
     - Spell checkers
     - IP routing
   - **Key Algorithms:**
     - **Insert a word into a trie**
     - **Search for a word in a trie**
     - **Delete a word from a trie**

---

### **Summary Table of Data Structures**
| Data Structure | Use Cases | Key Concepts |
|---------------|----------|--------------|
| **Array** | Sorting, searching | Sliding window, two-pointer technique |
| **Linked List** | Efficient insertions, deletions | Fast/slow pointer, cycle detection |
| **Stack** | Backtracking, DFS | LIFO, push/pop |
| **Queue** | BFS, scheduling | FIFO, enqueue/dequeue |
| **Hash Table** | Fast lookups, caching | Key-value storage |
| **Graph** | Networks, shortest path | DFS, BFS, Dijkstra’s algorithm |
| **Tree** | Hierarchical data | BST, traversals (inorder, preorder, postorder) |
| **Heap** | Priority queues, sorting | Min/max heap, heap sort |
| **Trie** | Autocomplete, searching | Prefix tree structure |
