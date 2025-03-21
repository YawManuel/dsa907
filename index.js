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
      } else {
          newNode.next = this.first
          this.first = newNode
          this.lenght++

          return this
    }
  }

 pop() {
   if (this.lenght === 0) {
      return undefined
   } else {
      let temp = this.first
      this.first = this.first.next
      temp.next = null
      this.lenght--

      return temp
   }    
 }
}

let stack = new Stack(0)
stack.push(2)
stack.push(4)
stack.push(6)
// stack.pop()
console.log(stack)