The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

const compareSym = (arr1, arr2) =>{
    const totals = []
    for(const i of arr1){
        if(!totals.includes(i) && !arr2.includes(i)){
            totals.push(i)
        }
    }

    for(const i of arr2){
        if(!totals.includes(i) && !arr1.includes(i)){
            totals.push(i)
        }
    }

    return totals
}


function sym(){
    const arrOfArrs = [...arguments];
    // console.log(arrOfArrs);
    let output = [];
    for (let i=0; i < arrOfArrs.length; i++) {
      output = compareSym(output, arrOfArrs[i]);
    }
  
    return output.sort((a, b) => a - b);
  }




  
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4], [45,32]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
