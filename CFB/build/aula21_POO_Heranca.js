"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const cont1 = new ContaPF('Renan', 312321123 - 25);
const cont2 = new ContaPF('Empresa', 333444555 - 12);
console.log(cont1.titular);
console.log(cont1.numero);
console.log(cont2.titular);
console.log(cont2.numero);
