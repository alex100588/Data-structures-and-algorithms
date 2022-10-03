
function mergeSortedArrays(arr1, arr2){
    const firstArr = arr1.sort((a,b) => a-b)
    const secondArr = arr2.sort((a,b) => a-b)
    
    return firstArr.concat(secondArr)
}

console.log(mergeSortedArrays([5, 2, 1, 6], [4, 8, 6]));
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeSortedArrays([5, 9, 1], [4, 2, 6]));