function fibbonacci(num){
  if(num < 2){
    return num
  }
  return fibbonacci(num-2) + fibbonacci(num-1)
}

console.log(fibbonacci(21));
