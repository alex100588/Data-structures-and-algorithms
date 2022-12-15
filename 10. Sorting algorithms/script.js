const bubbleSort = (array) =>{
    for(let i=0; i < array.length; i++){
        for(let j = 0; j< array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                    array[j] = array[j + 1]
                    array[j+1] = temp
            }
        }
    }
    return array
}




console.log(bubbleSort([5, 3, 4, 7, 3, 22, 12, 1]));
console.log(bubbleSort([10, 12, 22, 2, 0, 11]));
console.log(bubbleSort([1, 4, 66, 2, 12, 33]));