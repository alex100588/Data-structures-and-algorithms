class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }

  keys(){
    const keysArray = []
    for(let i = 0; i< this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }

  

}

const myHashtable = new HashTable(50)
myHashtable.set('grapes', 1000)
myHashtable.set('apples', 54)
myHashtable.set('oranges', 2)
const getItem = myHashtable.get('grapes')
const getItem2 = myHashtable.get('oranges')
// console.log(getItem, getItem2);
// console.log(myHashtable);
let keyArray = myHashtable.keys()
console.log(keyArray);