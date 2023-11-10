"use strict";
teste2();
function teste2() {
    console.log("teste");
}
const teste = (txt) => {
    console.log(txt);
};
teste("renan");
teste("typescript");
teste();
const fsoma2 = (n1, n2) => {
    return n1 + n2;
};
console.log(fsoma2(90, 10));
const fsoma3 = (n) => {
    let s = 0;
    n.forEach((el) => {
        s += el;
    });
    return s;
};
const numeros1 = [1, 2, 3, 4, 5];
console.log(fsoma3(numeros1));
