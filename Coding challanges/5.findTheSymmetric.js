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