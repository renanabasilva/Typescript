// Semelhante as classes, a interface é utilizada para criar um padrão para novos objetos, semelhante a string, number, boolean, etc.
// É possível aplicar herança dentro do conceito de interface.

// Interfaces podem ser implementadas dentro de classes e sub-classes através do 'implements'. Dessa maneira, fica obrigatório a implementação dos elementos da interface na classe.
// Ex.: class ContaPF extends Conta implements Tributos {

interface curso {
  titulo: string;
  des: string;
  iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
  aula: number;
  maxAlunos?: number;           // Ao utilizar a interrogação após o nome do elemento, faz ele tornar-se opcional  
}

interface cursoArtes extends curso{
  aula: number;
  maxAlunos?: number;           // Ao utilizar a interrogação após o nome do elemento, faz ele tornar-se opcional  
}

let curso1: cursoProg;
let curso2: cursoProg;
let curso3: cursoArtes;

curso1 = {
  titulo: "Typescript",
  des: "Curso de typescript",
  aula: 100,
  maxAlunos: 50,
  iniciarCurso(t:string){},
};

curso2 = {
  titulo: "Javascript",
  des: "Curso de javascript",
  aula: 200,
  maxAlunos: 80,
};

curso3 = {
  titulo: "C++",
  des: "Curso de C++",
  aula: 200,
};

// maxAlunos opcional.

console.log(curso1);
