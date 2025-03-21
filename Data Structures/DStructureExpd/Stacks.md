
```javascript
// recommended way of writing it
class Node {
      constructor(value) {
        this.value = value
        this.next = null
      }
}

class Stack {
    constructor(value) {
        let newNode = new Node(value)
        this.first = newNode
        this.lenght = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (this.lenght === 0) {
            this.first = newNode
        }

        newNode.next = this.first
        this.first = newNode
        this.lenght++
        
        return this
    }

   pop() {
     if (this.lenght === 0) {
        return undefined
     }

     let temp = this.first
     this.first = this.first.next
     temp.next = null
     this.lenght--

     return temp
     
   }
}
```

```javascript
let stack = new Stack(0)
stack.push(2)
stack.push(4)
stack.push(6)
stack.pop()
console.log(stack)

// other way of writing it
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20
```