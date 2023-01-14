function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j>0;j--) {
      if (array[j] < array[j -1]) {
        let swap = array[j]
        array[j] = array[j-1]
        array[j-1] = swap
        
      }
    }
  }
  return array
}

console.log(insertionSort([5,2,3,6,7,4]));
console.log(insertionSort([22,12, 55,1]));
