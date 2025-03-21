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

}

let linkedList = new LinkedList(2)
    linkedList.push(4)
    linkedList.push(6)

console.log(linkedList)