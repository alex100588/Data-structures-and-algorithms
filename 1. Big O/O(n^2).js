const myArray = ['a', 'b', 'c', 'd', 'e']

function logAllPairs(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            console.log(arr[i], arr[j]);
        }
    }
    console.log(numbers)
}

logAllPairs(myArray)