
const selectionSort = (array) =>{
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for(let j=i+1; j< array.length; j++){
            if(array[j] < array[lowest]){
                lowest = j
            }
        }
        let temp = array[i]
        array[i] = array[lowest]
        array[lowest] = temp
    }
    return array
}
   


console.log(selectionSort([5, 3, 4, 7, 3, 22, 12, 1]));
console.log(selectionSort([10, 12, 22, 2, 0, 11]));
console.log(selectionSort([1, 4, 66, 2, 12, 33]));
