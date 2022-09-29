// The naive approach, time complexity O(n^2)

function common(arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[i]){
                return true
            }else{
                return false
            }
            
        }
    }
}

console.log(common([1,2,3], [1,3]))
console.log(common(['a', 'b'], ['b', 'a']))
console.log(common(['a', 'b'], ['y', 't']))