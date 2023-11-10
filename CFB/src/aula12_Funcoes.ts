// Quando a função não retorna nada, ela será do tipo void.
function teste1(): void {
  console.log("Teste");
}

function logar(user: string, pass: string): void {
  console.log(`User: ${user}`);
  console.log(`Pass: ${pass}`);
}

logar("renan", "1234");
logar("teste", "4321");

function soma2(n1: number, n2: number): number {
  let r:number = n1 + n2;
  return r;
}

let n_res: number = soma2(10, 5);
let s_res:string = soma2(3, 4).toString();

console.log(n_res);
console.log(s_res);
