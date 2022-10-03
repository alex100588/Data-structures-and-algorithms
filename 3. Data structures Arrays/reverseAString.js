function reverse(str){
    let reversed = []
    for(let i=str.length; i>=0; i--){
        reversed.push(str[i])
    }
    return reversed.join('')
}

console.log(reverse('alexandru'));

// reverse with built in functions
const reversed2 = (str)=> str.split('').reverse().join('')

console.log(reversed2('alexandru'));


