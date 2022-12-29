const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)
//   console.log(left, right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    result = []
    leftIndex = 0
    rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    console.log(left[leftIndex]);
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


const answer = mergeSort(numbers);
console.log(answer);