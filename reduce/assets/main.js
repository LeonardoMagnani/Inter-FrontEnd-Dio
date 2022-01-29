// Map

// let meuArray = [0,2,3,5,8,9];

// meuArray.map((i) => item * 2)

// Reduce chalenge

var arr = [];


function getNum (arr) {
    let option = parseFloat(prompt('Tecle 1 para mais numero e 0 para continuar'));
    if (option == 1) {
        arr.push(parseFloat(prompt('Digite o número desejado')))
        getNum(arr);
    } else if (0) {
        return
    }
    return somaNum(arr);
}


function somaNum (arrayy) {
    return arrayy.reduce(function (prev, current){
        console.log(prev);
        console.log(current);
        return prev + current;
    });
    console.log(somaNum(arrayy));
}




