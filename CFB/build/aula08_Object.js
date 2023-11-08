"use strict";
let dados = {
    nome: "Arioswaldo",
    idade: "25",
    status: "A",
    cumprimento: () => console.log("Oi"),
    info: (p) => console.log(p)
};
console.log(typeof (dados));
console.log(dados.nome);
dados.cumprimento();
dados.info(dados.nome);
