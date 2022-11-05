

class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class Stack{
    constructor(){
      this.array = []
    }
  
    peek(){
      return this.array[this.array.length-1]
    }
  
    push(value){
        this.array.push(value)
    }
  
    pop(){
      this.array.pop()
    }
  }
  
  const myStack = new Stack()
  myStack.push('Google')
  myStack.push('Netflix')
  myStack.push('Apache')
  myStack.pop()
  // myStack.pop()
  // myStack.pop()
  console.log(myStack.peek());
  console.log(myStack);