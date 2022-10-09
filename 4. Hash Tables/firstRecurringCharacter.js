const myArray = [2,4,6,3,5,2,7,7,4]
const myArray2 = [2, 3, 4, 5]

// The naive approach O(n^2)
const firstReccurring = (arr)=>{
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            // console.log(arr[i], arr[j]);
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
        return false
    }
}

// The good approach O(n)
const firstReccurring2 = (arr)=>{
    let map = {}
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]] !== undefined){
            return arr[i]
        }else{
           map[arr[i]] = i
        }
        console.log(map);
    }
    // console.log(map);
    return undefined
}

console.log(firstReccurring(myArray))
console.log(firstReccurring(myArray2))

console.log(firstReccurring2(myArray))
console.log(firstReccurring2(myArray2))