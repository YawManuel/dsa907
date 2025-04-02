A tree is a non-linear data structure consisting of nodes connected by edges, where each node has a value and pointers to its children. Trees are widely used in hierarchical data representation.

### **Trees & Binary Search Trees (BST)**
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

1. Binary Tree
Definition: Each node has at most two children (left and right).

Real-Life Example: File System Hierarchy

Folders and files are structured in a binary tree manner, where each folder can have two subfolders or files.

Code Implementation
javascript
Copy
Edit
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      } else if (!node.right) {
        node.right = newNode;
        return;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
}

let tree = new BinaryTree();
tree.insert("Folder1");
tree.insert("File1");
tree.insert("File2");
console.log(tree.root); // Output: Folder1 with File1 and File2 as children
2. Binary Search Tree (BST)
Definition: A binary tree where:

Left child < Parent < Right child

Real-Life Example: Databases (Indexing)

BSTs help in searching operations in databases (e.g., MySQL, MongoDB).

Code Implementation
javascript
Copy
Edit
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
console.log(bst); // A binary search tree structure
3. AVL Tree (Self-Balancing BST)
Definition: A BST that maintains balance using rotations.

Real-Life Example: Memory Management

Used in OS memory allocation to manage memory efficiently.

Code Implementation
javascript
Copy
Edit
class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    return node ? node.height : 0;
  }

  insert(node, value) {
    if (!node) return new AVLNode(value);

    if (value < node.value) node.left = this.insert(node.left, value);
    else node.right = this.insert(node.right, value);

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    return node;
  }
}

let avl = new AVLTree();
avl.root = avl.insert(avl.root, 50);
avl.root = avl.insert(avl.root, 30);
avl.root = avl.insert(avl.root, 70);
console.log(avl.root);
4. B-Trees
Definition: A self-balancing tree used in databases.

Real-Life Example: Databases (MySQL, MongoDB)

Indexing in databases is implemented using B-Trees.

Code Implementation
javascript
Copy
Edit
class BTreeNode {
  constructor(leaf = false) {
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(true);
    this.t = t; // Minimum degree
  }
}

let bTree = new BTree(3);
console.log(bTree); // Output: Empty BTree with minimum degree 3
5. Heap (Binary Heap)
Definition: A complete binary tree used for priority-based tasks.

Real-Life Example: Priority Queues (Task Scheduling)

Used in CPU scheduling algorithms.

Code Implementation
javascript
Copy
Edit
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heap.sort((a, b) => a - b);
  }

  extractMin() {
    return this.heap.shift();
  }
}

let heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
console.log(heap.extractMin()); // Output: 5 (Smallest priority element)
6. Trie (Prefix Tree)
Definition: A tree-based structure for efficient string searching.

Real-Life Example: Autocomplete in Google Search

Used in search engines, spell checkers, and text prediction.

Code Implementation
javascript
Copy
Edit
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}

let trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // Output: true
7. N-ary Tree
Definition: A tree where each node can have more than two children.

Real-Life Example: HTML DOM (Document Object Model)

HTML DOM tree is an N-ary tree, where elements can have multiple children.

Code Implementation
javascript
Copy
Edit
class NaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class NaryTree {
  constructor(rootValue) {
    this.root = new NaryNode(rootValue);
  }

  addChild(parent, childValue) {
    const newNode = new NaryNode(childValue);
    parent.children.push(newNode);
    return newNode;
  }
}

let domTree = new NaryTree("HTML");
let body = domTree.addChild(domTree.root, "Body");
let div = domTree.addChild(body, "Div");
console.log(domTree);
Summary of Tree Data Structures and Real-Life Use Cases
Tree Type	Real-Life Example
Binary Tree	File System Hierarchy
Binary Search Tree (BST)	Databases (Indexing)
AVL Tree	Memory Management
B-Trees	Database Indexing (MySQL, MongoDB)
Heap (Binary Heap)	Task Scheduling (CPU Priority Queue)
Trie (Prefix Tree)	Autocomplete, Search Engines
N-ary Tree	HTML DOM Structure
