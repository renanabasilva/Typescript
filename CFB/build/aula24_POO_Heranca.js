"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    saldo() {
        return parseFloat(this.saldoconta.toFixed(2));
    }
    deposito(valor) {
        if (valor < 0)
            return console.log("Valor inválido.");
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0)
            return console.log("Valor inválido.");
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo da conta insuficiente. Saldo: R$${this.saldo()}`);
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`);
    }
    info() {
        console.log(`Tipo de conta: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log("------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de deposito superior ao limite do tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000)
            console.log(`Valor de saque superior ao limite do tipo de conta`);
        else
            super.saque(valor);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}`);
    }
    info() {
        console.log(`Tipo de conta: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log("------------------------");
    }
    deposito(valor) {
        if (valor < 1000) {
            console.log(`Valor de deposito inferior ao limite do tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000)
            console.log(`Valor de saque superior ao limite do tipo de conta`);
        else
            super.saque(valor);
    }
}
const cont1 = new ContaPF("Renan", 312321123 - 25);
const cont2 = new ContaPJ("Empresa", 333444555 - 12);
cont1.deposito(500);
cont1.saque(499.99);
console.log(cont1.saldo().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
