const twoNumberSum = (arr, number)=>{
    for(let i=0; i< arr.length -1; i++){
        for(let j = i + 1; j < arr.length; j++){
            // console.log(arr[i], arr[j]);
            if(arr[i] + arr[j] === number){
              return `Number ${arr[i]} plus number ${arr[j]} are equal to the sum of ${number}`
            }
        }
    }
    return `No numbers in the array is equal with ${number}`
}

console.log(twoNumberSum([3,5,-4,8,11,1], 11));

