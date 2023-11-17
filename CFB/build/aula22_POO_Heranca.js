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
    info() {
        console.log("------------------------");
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log("------------------------");
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}`);
    }
}
const cont1 = new ContaPF('Renan', 312321123 - 25);
const cont2 = new ContaPJ('Empresa', 333444555 - 12);
cont1.info();
