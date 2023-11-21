// É possível exportar mais de uma classe com apenas um import

// import { Pessoa, Objeto, Coisas } from "./classes";
import Pessoa, { Objeto, Coisas } from "./classes";
// import { Objeto } from "./classes";

const p1 = new Pessoa("Renan", 1.72);
const o1 = new Objeto('Mesa')

console.log(p1.nome);
console.log(p1.altura);
console.log(o1.nome);
console.log(Coisas);


// Outros exemplos de importação e exportação:


// import TodasClasses from "./classes";

// const p1 = new TodasClasses.Pessoa("Renan", 1.72);
// const o1 = new TodasClasses.Objeto('Mesa')

// const teste32 = new TodasClasses.Pessoa("renan", 1.72);
// console.log(TodasClasses.Coisas);