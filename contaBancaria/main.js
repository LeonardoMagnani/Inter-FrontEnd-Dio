class contaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo () {
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
    }

    

    sacar(valor) {
        if (valor > this._saldo) { 
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super (agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super (agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super (agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada!'
        } else {
            this._saldo = this._saldo - valor; 
        }
    }
}

/*

Manipulando classe no console:

const corrente = new contaCorrente (1, 234, true)

const poupanca = new contaPoupanca (1, 234)

const universitaria = new contaPoupanca (1, 234)

*/