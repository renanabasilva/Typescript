const Coisas = ["Corda", "Pilha", "Lâmpada", "Chave"];

class Pessoa {
  nome: string;
  altura: number;

  constructor(nome: string, altura: number) {
    this.nome = nome;
    this.altura = altura;
  }
}

// export class Objeto {
class Objeto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

// Sempre que houver um elemento padrão, ele não precisa ficar dentro das chaves.

export default Pessoa;
export { Coisas, Objeto };

// Para se exportar todos os elementos em apenas um export, coloca-se tudo dentro de um objeto e faz a exportação.

const TodasClasses = {
  Pessoa,
  Objeto,
  Coisas,
};

// export default TodasClasses;
