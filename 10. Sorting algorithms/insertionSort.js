const numbers = [1,5,2,4,3];
const numbers2 = [11,22,33,543,0,12];


function insertionSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if(array[j] < array[j-1]){
                // let temp = array[j]
                // array[j] = array[j-1]
                // array[j-1] = temp
                [array[j], array[j-1]] = [array[j-1], array[j]]
            }else{
                break
            }
        }
    }
    return array
}
console.log(insertionSort(numbers))
console.log(insertionSort(numbers2))