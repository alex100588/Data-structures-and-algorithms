const firstLinkedList = {
    head:{
        value: 10,
        next:{
            value: 5,
            next:{
                value:22,
                next: null
            }
        }
    }
}

const secondLinkedList = {
    head:{
        value: 23,
        next:{
            value:33,
            next:{
                value: 55,
                next: null
            }
        }
    }
}

const thirdLinkedList = {
    head:{
        value:55,
        next:{
            value: 87,
            next:{
                value:45,
                next: null
            }
        }
    }
}

class LinkedList{
    constructor(value){
        this.head ={
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList);

// console.log(firstLinkedList.head.next.next.value);