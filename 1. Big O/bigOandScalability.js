
const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill']
const large = new Array(100).fill('nemo')

function findNemo(array){
    let t0 = performance.now()
    for(let i = 0; i< array.length; i++){
        if(array[i] === 'nemo') console.log('Finded');
    }
    let t1 = performance.now()
    console.log(`Call to find Nemo took ${t1-t0} milliseconds`);
    console.log(t1- t0);
}

findNemo(nemo)
findNemo(everyone)
findNemo(large)