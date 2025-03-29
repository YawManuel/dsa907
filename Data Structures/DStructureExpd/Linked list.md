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

```javascript
class Node {
      constructor(value) {
         this.value = value
         this.next = null
      }
}

class LinkedList {
    constructor(value) {
      this.head = new Node(value)
      this.tail = this.head
      this.length = 1
    }

    push(value){
      let newNode= new Node(value)
      this.tail.next = newNode
      this.tail = newNode
      this.length++

    }

    pop(){
      

    }

    unshift(value){
      let newNode = new Node(value)

      if(!this.head) {
        this.head = newNode
        this.tail = newNode
      }
      
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }
    
    shift() {
      if(!this.head) {
        return undefined
      }

      // 1. Point the first node/element
      let temp = this.head

      // 2. Move the head to next node/element
      this.head = this.head.next

      // 3. Remove first element
      temp.next = null
      this.length--

      if (this.length === 0) {
        this.tail = null
      }

      return temp
    }

    getfirst(){
      let temp = this.head
      return temp
    }

    getlast(){

    }
  
    get(){

    }

    set(index, value){

    }

    insert(){

    }

    size(){

    }

    clear(){
      
    }

}

let linkedList = new LinkedList(2)
    linkedList.push(4)
    linkedList.push(6)
    // linkedList.unshift(0)
    // linkedList.shift()
    // linkedList.getfirst()

console.log(linkedList.getfirst())

// Double Linkedlist

class DLNode {
  constructor (value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor (value) {
    let newDLNode = new DLNode(value)
    this.head = newDLNode
    this.tail = newDLNode
    this.length = 1
  }

  push(value) {
    let newDLNode = new DLNode(value)
    this.tail.next = newDLNode
    newDLNode.prev = this.tail
    this.tail = newDLNode
    this.length++
    return this

  }
}


let newDLL = new DoubleLinkedList(0)
newDLL.push(2)

console.log(newDLL)
```

Linked lists, while often discussed in computer science courses, also have real-world applications where their properties—such as dynamic memory usage, ease of insertion and deletion—make them a natural choice. Here are some examples:

1. **Music Players & Media Playlists:**  
   Many music players manage playlists as linked lists. Each song is a node, and you can easily insert a new song, remove one, or rearrange the order without shifting a large contiguous block of memory.  
   *Real-life analogy:* Think of a physical cassette tape where you can “edit” the order of tracks by re-splicing sections.

2. **Undo/Redo Functionality in Software:**  
   Applications like text editors or graphic design tools often use linked lists (or a variation like a doubly linked list) to manage a sequence of states. Each node represents a state (or change), and moving backward or forward through the list allows the user to undo or redo actions efficiently.

3. **Operating System Scheduling and Memory Management:**  
   Operating systems use linked lists in various ways:
   - **Process Scheduling:** Some OS schedulers use linked lists to manage the list of processes or tasks waiting for execution.  
   - **Memory Management:** Free memory blocks might be tracked using a linked list (often called a “free list”), which allows the OS to quickly allocate and free memory segments without needing to continuously reallocate large memory arrays.

4. **Implementing Data Structures:**  
   Many data structures you use in everyday applications (like queues and stacks) are implemented on top of linked lists because they allow fast insertions and deletions. For example, a browser’s history might be implemented as a doubly linked list to allow you to navigate back and forward through pages.

5. **Navigation Systems & Route Planning:**  
   In some systems, a linked list can represent a series of steps or turns in a route. Since the list can be easily updated, it can be useful in dynamic navigation systems where steps might be added, removed, or reordered in real time.

6. **Networking:**  
   Linked lists are sometimes used in networking for managing packets or connections. For example, routers or network switches might use them to keep track of packets queued for processing.

These examples show that linked lists aren’t just a theoretical concept—they’re chosen in practical applications where the advantages of dynamic memory management and ease of modification outweigh the disadvantages (like non-contiguous memory storage).

Below are code examples in JavaScript that simulate real-world scenarios where linked lists are a natural fit. Each example uses a linked list (either singly or doubly linked) to manage data dynamically and support efficient insertions and deletions.

---

## 1. Music Player & Media Playlist  
Imagine a music player where each song is a node in a doubly linked list so you can easily move forward or backward in the playlist.

```javascript
class SongNode {
  constructor(title) {
    this.title = title;
    this.prev = null;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }
  
  // Add a song to the end of the playlist
  addSong(title) {
    const newSong = new SongNode(title);
    if (!this.head) {
      this.head = newSong;
      this.tail = newSong;
      this.current = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
  }
  
  playCurrent() {
    if (this.current) {
      console.log("Playing: " + this.current.title);
    } else {
      console.log("Playlist is empty.");
    }
  }
  
  nextSong() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      this.playCurrent();
    } else {
      console.log("Reached end of playlist.");
    }
  }
  
  previousSong() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      this.playCurrent();
    } else {
      console.log("At the beginning of playlist.");
    }
  }
}

// Example usage:
const myPlaylist = new Playlist();
myPlaylist.addSong("Song 1");
myPlaylist.addSong("Song 2");
myPlaylist.addSong("Song 3");

myPlaylist.playCurrent();   // Playing: Song 1
myPlaylist.nextSong();      // Playing: Song 2
myPlaylist.previousSong();  // Playing: Song 1
```

---

## 2. Undo/Redo Functionality in Software  
Many text editors or graphic tools maintain history using a doubly linked list. Each node represents a state; you can traverse backward (undo) or forward (redo).

```javascript
class StateNode {
  constructor(state) {
    this.state = state;
    this.prev = null;
    this.next = null;
  }
}

class EditorHistory {
  constructor(initialState) {
    this.current = new StateNode(initialState);
  }
  
  addState(newState) {
    const newNode = new StateNode(newState);
    // When adding a new state, clear any "redo" history:
    newNode.prev = this.current;
    this.current.next = newNode;
    this.current = newNode;
  }
  
  undo() {
    if (this.current.prev) {
      this.current = this.current.prev;
      console.log("Undo: " + this.current.state);
    } else {
      console.log("No more undo steps.");
    }
  }
  
  redo() {
    if (this.current.next) {
      this.current = this.current.next;
      console.log("Redo: " + this.current.state);
    } else {
      console.log("No more redo steps.");
    }
  }
}

// Example usage:
const editor = new EditorHistory("Initial text");
editor.addState("First edit");
editor.addState("Second edit");
editor.undo(); // Undo: First edit
editor.redo(); // Redo: Second edit
```

---

## 3. Operating System Scheduling & Memory Management  
Operating systems often manage processes or free memory blocks with linked lists. Below is a simplified example simulating a process scheduler using a singly linked list.

```javascript
class ProcessNode {
  constructor(pid, name) {
    this.pid = pid;
    this.name = name;
    this.next = null;
  }
}

class ProcessQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(pid, name) {
    const process = new ProcessNode(pid, name);
    if (!this.head) {
      this.head = process;
      this.tail = process;
    } else {
      this.tail.next = process;
      this.tail = process;
    }
  }
  
  dequeue() {
    if (!this.head) return null;
    const removedProcess = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedProcess;
  }
  
  displayQueue() {
    let current = this.head;
    while (current) {
      console.log(`Process ID: ${current.pid}, Name: ${current.name}`);
      current = current.next;
    }
  }
}

// Example usage:
const scheduler = new ProcessQueue();
scheduler.enqueue(1, "Process A");
scheduler.enqueue(2, "Process B");
scheduler.enqueue(3, "Process C");

console.log("Process Queue:");
scheduler.displayQueue();

const runningProcess = scheduler.dequeue();
console.log("Dequeued Process:", runningProcess.name);
```

---

## 4. Implementing Data Structures (Queue using a Linked List)  
Queues can be built atop linked lists for dynamic memory usage and fast insertions/deletions.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }
  
  isEmpty() {
    return !this.head;
  }
}

// Example usage:
const queue = new LinkedQueue();
queue.enqueue("Task 1");
queue.enqueue("Task 2");
console.log(queue.dequeue()); // Task 1
console.log(queue.dequeue()); // Task 2
```

---

## 5. Navigation Systems & Route Planning  
A navigation system can represent a route as a linked list where each node is a stop or direction.

```javascript
class RouteNode {
  constructor(location) {
    this.location = location;
    this.next = null;
  }
}

class Route {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addStop(location) {
    const newStop = new RouteNode(location);
    if (!this.head) {
      this.head = newStop;
      this.tail = newStop;
    } else {
      this.tail.next = newStop;
      this.tail = newStop;
    }
  }
  
  printRoute() {
    let current = this.head;
    let routeStr = "";
    while (current) {
      routeStr += current.location;
      if (current.next) routeStr += " -> ";
      current = current.next;
    }
    console.log("Route: " + routeStr);
  }
}

// Example usage:
const myRoute = new Route();
myRoute.addStop("Home");
myRoute.addStop("Coffee Shop");
myRoute.addStop("Office");
myRoute.printRoute(); // Route: Home -> Coffee Shop -> Office
```

---

## 6. Networking: Packet Queue  
Routers and network switches can use linked lists to manage packets queued for processing. Each packet is a node in the queue.

```javascript
class PacketNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class PacketQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(data) {
    const packet = new PacketNode(data);
    if (!this.head) {
      this.head = packet;
      this.tail = packet;
    } else {
      this.tail.next = packet;
      this.tail = packet;
    }
  }
  
  dequeue() {
    if (!this.head) return null;
    const packet = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return packet.data;
  }
  
  displayQueue() {
    let current = this.head;
    while (current) {
      console.log("Packet:", current.data);
      current = current.next;
    }
  }
}

// Example usage:
const networkQueue = new PacketQueue();
networkQueue.enqueue("Packet 1: Hello");
networkQueue.enqueue("Packet 2: Data");
networkQueue.enqueue("Packet 3: Goodbye");

console.log("Network Packet Queue:");
networkQueue.displayQueue();

const processedPacket = networkQueue.dequeue();
console.log("Processed Packet:", processedPacket);
```

---

Each of these examples shows how a linked list can model a real-world system where data is managed dynamically. Whether you're moving between songs in a playlist, undoing actions in an editor, or processing tasks in an OS scheduler, linked lists offer flexibility and efficiency in handling dynamic data.