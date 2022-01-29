// function myArray (arr, num) {
//     try {
//         if (!arr || !num) throw new ReferenceError ("Envie os parâmetros antes");
//         if (typeof(arr) !== 'object') throw new TypeError (`O parâmetro '${arr}' enviado não é um objeto`);
//         if (typeof(num) !== 'number') throw new TypeError (`O parâmetro '${num}' enviado não é um número`);
//         if (arr.length !== num) throw new RangeError (`O número enviado '${num}' não condiz com o tamanho do array '${arr.length}'`);

//         return arr;
//     } 
    
//     catch (e) {
//         if (e instanceof ReferenceError) {
//             console.log('ReferenceError');
//             console.log(e.message);
//             throw e;
//         } else if (e instanceof TypeError) {
//             console.log('TypeError');
//             console.log(e.message);
//             throw e;
//         } else if (e instanceof RangeError) {
//             console.log('RangeError');
//             console.log(e.message);
//             throw e;
//         }
//     }

//     finally {
//         console.log('finally:: Esse código é executado independente de outra coisa.');
//     }
// }



/*
function sucess () {
    console.log("sucess");
}
function failure () {
    console.log("failure");
}


function mostraConsole () {
    let text = prompt('digite a msg')
    if (!text) {
        return failure();
    } else {
        return sucess();
    }
}
*/




const promise = mostraConsole = () => {
    let text = prompt('digite a msg')
};

// promise.then(sucess, failure);