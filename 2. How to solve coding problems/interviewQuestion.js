// The naive approach, time complexity O(n^2)

function containsCommonItems1(arr1, arr2){
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

console.log(containsCommonItems1([1,2,3], [1,3]))
console.log(containsCommonItems1(['a', 'b'], ['b', 'a']))
console.log(containsCommonItems1(['a', 'b'], ['y', 't'])) 


//  The improved approach, time complexity O(n)
function containsCommonItems2(array1, array2){
    const map = {}
    for(let i=0; i<array1.length; i++){
        if(!map[array1[i]]){
            const item = array1[i]
            map[item] = true
            console.log(map);
        }
       
    }

    for(let j = 0; j<array2.length; j++){
        if(map[array2[j]]){
            return true
        }
        return false
    }
    
}

console.log(containsCommonItems2([1,2,3], [1,3]))
console.log(containsCommonItems2(['a', 'b'], ['b', 'a']))
console.log(containsCommonItems2(['a', 'b'], ['y', 't'])) 



function containsCommonItems3(arr1, arr2){
    return arr1.some(item =>  arr2.includes(item))
}
console.log(containsCommonItems3([1,2,3], [1,3]))
console.log(containsCommonItems3(['a', 'b'], ['b', 'a']))
console.log(containsCommonItems3(['a', 'b'], ['y', 't'])) 

