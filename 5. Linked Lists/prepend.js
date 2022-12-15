class Node{
  constructor(value){
    this.value = value
    this.nex = null
  }
}

class SinglyLinkedList{
  constructor(value){
    this.head = new Node(value)
    this.tail = this.head
    this.next = null
    this.length++
  }

  append(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    }else{
      this.tail.next = newNode
      this.tail = newNode
      this.length++
      return this
    }
  }

  prepend(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    }else{
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }
  }
}

let myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.prepend(2)
console.log(myLinkedList);
