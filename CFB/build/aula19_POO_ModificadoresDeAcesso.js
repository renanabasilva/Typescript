"use strict";
class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome  : ${this.nome}`);
        console.log(`Ram   : ${this.ram}`);
        console.log(`CPU   : ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('--------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000)
            this.ram = qtde;
        else
            console.log(`Quantidade ${qtde} para o ${this.nome} não é permitido.`);
    }
}
const comp1 = new Computador("Computador 01", 64, 10);
const comp2 = new Computador("Computador 02", 32, 5);
const comp3 = new Computador("Computador 03", 128, 10);
comp1.ligar();
comp3.ligar();
comp1.desligar();
comp1.upRam(-100);
comp1.info();
comp2.info();
comp3.info();
