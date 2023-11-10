teste2();

function teste2(): void {
  console.log("teste");
}

const teste = (txt?: string): void => {
  console.log(txt);
};

teste("renan");
teste("typescript");
teste();

const fsoma2 = (n1: number, n2: number): number => {
  return n1 + n2;
};

console.log(fsoma2(90, 10));

const fsoma3 = (n: number[]): number => {
  let s: number = 0;
  n.forEach((el) => {
    s += el;
  });
  return s;
};

const numeros1: number[] = [1, 2, 3, 4, 5];

console.log(fsoma3(numeros1));
