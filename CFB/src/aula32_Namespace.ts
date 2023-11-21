namespace Veiculos {
  export class Carro {
    nome: string;
    constructor(nome: string) {
      this.nome = nome;
    }
  }
}

namespace Motores {
  class Turbo {
    potencia:number;
    constructor(potencia: number){
      this.potencia = potencia;
    }
  }

  export class Motor {
    potencia: number;
    constructor(potencia: number) {
      this.potencia = potencia;
    }
  }
}

const carro1 = new Veiculos.Carro("Focus");

console.log(carro1.nome);
