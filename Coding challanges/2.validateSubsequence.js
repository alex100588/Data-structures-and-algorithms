// Solution 1
function isValidSubsequence(array, sequence) {
    let sequenceIdx = 0
    for(const value of array){
        if(sequenceIdx === sequence.length) break
        if(sequence[sequenceIdx] === value) sequenceIdx++
    }
    return sequenceIdx === sequence.length
  }
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
  
//  Solution 2
  function validSubsequence(array, sequence){
    let sequenceidx = 0
    for(let i=0; i < array.length; i++){
        if(sequence[sequenceidx] === array[i]) sequenceidx++
    }
    return sequenceidx === sequence.length
  }

  console.log( validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); 
  console.log( validSubsequence([5, 1, 22, 25, 6, 8, 10], [1, 6, -1, 10])); 