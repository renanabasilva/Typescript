// let arr = [10, 20, 30, 40];

// let [aa, bb, cc, dd] = arr;
// let [aa, bb, cc, dd] =  [10, 20, 30, 40];
let [aa, bb, cc, dd] = ["Verde", "Amarelo", "Azul", "Branco"];

const obj = {
  cor1: "Verde",
  cor2: "Amarelo",
  cor3: "Azul",
  cor4: "Branco",
};

let { cor1, cor2, cor3, cor4 } = obj;

// let [nu1=0, nu2=0, nu3=0] = [10, 20]
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const fcores = () => {
  return ["Verde", "Amarelo", "Azul", "Branco"];
};

let [co1, co2, co3, co4] = fcores();

let texto = "Curso de Typescript";

let [...t] = texto.split(" ")
let [p1, p2, p3] = texto.split(" ")

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);

console.log(t)

console.log(nu1);
console.log(nu2);
console.log(nu3);

console.log(p1, p2, p3);