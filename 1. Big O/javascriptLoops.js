const nemo = ['nemo']

function findNemo(array){
    for(let i = 0; i< array.length; i++){
        if(array[i] === 'nemo') console.log('Finded');
    }
}

function findNemo2(array){
    array.forEach(item => {
        if(item === 'nemo') console.log('Finded');
    });
}

function findNemo3(array){
    for(let fish of array){
        if(fish === 'nemo'){
            console.log('Finded');
        }
    }
}

findNemo(nemo)
findNemo2(nemo)
findNemo3(nemo)