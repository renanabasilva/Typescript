// Para utilizar os elementos do namespace do lado de fora, é necessário utilizar o export.
// Classes abstratas só servem para serem herdadas. Não se pode utilizar para criar.

namespace Veiculos {
  enum Cores {
    "Preto",
    "Branco",
    "Vermelho",
    "Amarelo",
    "Azul",
    "Prata",
  }
  abstract class Carro {
    private nome: string;
    private motor: Motores.Motor;
    private cor: string;
    constructor(nome: string, motor: Motores.Motor, cor: Cores) {
      this.nome = nome;
      this.motor = motor;
      this.cor = Cores[cor];
    }

    public ligar() {
      this.motor.liga = true;
    }
    public desligar() {
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

  export class CarroEsportivo extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
    }
  }

  export class CarroPopular extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(3, 100), cor);
    }
  }
}

namespace Motores {
  export class Turbo {
    private pot: number;
    constructor(pot: number) {
      this.pot = pot;
    }

    get potencia() {
      return this.pot;
    }
  }

  export class Motor {
    private ligado: boolean;
    private cilindros: number;
    private pot: number;
    constructor(cilindros: number, pot: number, turbo?: Turbo) {
      this.ligado = false;
      this.cilindros = cilindros;
      this.pot = pot + (turbo ? turbo.potencia : 0);
    }

    set liga(ligado: boolean) {
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
}

// const carro1 = new Veiculos.Carro("Focus");

// console.log(carro1.nome);
// console.log(carro1.motor);

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
