let numeros:number[] = [20, 30, 40];
// let numeros: Array<number | string> = [20, 30, 40, "Renan"];
// let numeros:(number | string)[] = [20, 30, 40, "Renan"];

numeros.push(50);
numeros.unshift(10);
numeros.pop();
numeros.shift();
console.log(numeros);

let numeros_ro:ReadonlyArray<number> = [100, 200, 300];

console.log(numeros_ro);

// Os valores do array não podem ser alterados no array original. Pode-se utilizar métodos como forEach e map por exemplo, em que é gerado um novo array.
