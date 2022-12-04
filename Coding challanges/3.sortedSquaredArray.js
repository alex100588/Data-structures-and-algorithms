// Solution 1
const sortedSquaredArrays = (array) =>{
    let result = array.map(arr => arr ** 2).sort((a,b) => a-b)
    return result
}

console.log(sortedSquaredArrays([2, 3, 4, 5, 10]));


// Solution 2
const sorted2 = (arr) =>{
    let result = []

    for(let i = 0; i < arr.length; i++){
        let values = arr[i] ** 2
        result.push(values )
    }
    return result.sort((a,b) => a-b)
}

console.log(sorted2([2, 3, 4, 5, 10]));