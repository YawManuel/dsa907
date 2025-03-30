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

let stack = new Stack(0)
stack.push(2)
stack.push(4)
stack.push(6)
stack.pop()
console.log(stack)

// class DLNode {
//   constructor (value) {
//     this.value = value
//     this.next = null
//     this.prev = null
//   }
// }

// class DoubleLinkedList {
//   constructor (value) {
//     let newDLNode = new DLNode(value)
//     this.head = newDLNode
//     this.tail = newDLNode
//     this.length = 1
//   }

//   push(value) {
//     let newDLNode = new DLNode(value)
//     this.tail.next = newDLNode
//     newDLNode.prev = this.tail
//     this.tail = newDLNode
//     this.length++
//     return this

//   }
// }


// let newDLL = new DoubleLinkedList(0)
// newDLL.push(2)

// console.log(newDLL)

// class Node {
//     constructor(value) {
//       this.value = value
//       this.next = null
//     }
// }

// class Stack {
//   constructor(value) {
//       let newNode = new Node(value)
//       this.first = newNode
//       this.lenght = 1
//   }

//   push(value) {
//       const newNode = new Node(value)

//       if (this.lenght === 0) {
//           this.first = newNode
//       } else {
//           newNode.next = this.first
//           this.first = newNode
//           this.lenght++

//           return this
//     }
//   }

//  pop() {
//    if (this.lenght === 0) {
//       return undefined
//    } else {
//       let temp = this.first
//       this.first = this.first.next
//       temp.next = null
//       this.lenght--

//       return temp
//    }    
//  }
// }

// let stack = new Stack(0)
// stack.push(2)
// stack.push(4)
// stack.push(6)
// // stack.pop()
// console.log(stack)