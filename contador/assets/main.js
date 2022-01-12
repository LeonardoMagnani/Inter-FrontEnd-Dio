var lessButton = document.querySelector('#lessButton');
var plusButton = document.querySelector('#plusButton');
var numeroTela = document.querySelector('#number');
var numero = 0;

lessButton.addEventListener('click', function clickLess () {
    numero -= 1;
    numeroTela.innerHTML = numero
    numberColor();
})

plusButton.addEventListener('click', function clickPlus () {
    numero += 1;
    numeroTela.innerHTML = numero;
    numberColor();
})

function numberColor () {
    if (numero < 0) {
        numeroTela.style.color = 'red';
    } else {
        numeroTela.style.color = 'white';
    }

    if (numero >= 10) {
        plusButton.style.display = 'none';
    } else if (numero <= 10) {
        plusButton.style.display = 'inline';
    }
    
    if (numero <= -10) {
        lessButton.style.display = 'none';
    } else if (numero >= -10) {
        lessButton.style.display = 'inline';
    }
}