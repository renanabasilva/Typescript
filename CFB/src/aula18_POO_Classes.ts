class Computador {

  nome: string;
  ram: number;
  cpu: number;
  ligado: boolean;

  constructor(nome:string, ram:number, cpu:number){
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }
}

const comp1 = new Computador("Computador 01", 64, 10);
const comp2 = new Computador("Computador 02", 32, 5);
const comp3 = new Computador("Computador 03", 128, 10);

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
