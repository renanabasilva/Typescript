"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estaLigado() {
            return this.motor.liga ? "Sim" : "Não";
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
        get quantosCilindros() {
            return this.motor.cilind;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
        get cilind() {
            return this.cilindros;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro2 = new Veiculos.CarroEsportivo("Mustang", 2);
const carro3 = new Veiculos.CarroPopular("Focus", 5);
carro2.ligar();
carro3.ligar();
console.log(`Nome: ${carro2.meuNome}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPotencia}`);
console.log(`Ligado: ${carro2.estaLigado}`);
console.log(`Cilindros: ${carro2.quantosCilindros}`);
console.log(`------------------------------------`);
console.log(`Nome: ${carro3.meuNome}`);
console.log(`Cor: ${carro3.minhaCor}`);
console.log(`Potencia: ${carro3.minhaPotencia}`);
console.log(`Ligado: ${carro3.estaLigado}`);
console.log(`Cilindros: ${carro3.quantosCilindros}`);
