// A classe conta serve com modelo para criação de outras classes, devido a isso ela deve ser do tipo abstract (Classe Abstrata).
// Não é possível criar novas instâncias de classes abstratas (Não se pode criar objetos), elas apenas podem ser herdadas por outras classes.

abstract class Conta {
  // Public pode ser acessado de qualquer lugar.
  // Ao atribuir readonly em numero, faz com que não possa ser alterado após atribuido.
  private readonly numero: number;
  // Protected pode ser acessado pela classe pai ou pela classe filho. Não pode ser acessado externamente.
  protected titular: string;
  private saldoconta: number;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoconta = 0;
  }

  // Private só pode ser acessado dentro da própria classe.
  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }
  protected info(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }

  // O método Get serve para se obter algo, um parâmetro ou propriedade dentro da classe.
  // Ao utilizar o GET em um método, o transforma em uma propriedade.

  public get saldo(): number {
    return parseFloat(this.saldoconta.toFixed(2));
    // return this.saldoconta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  // O método Set serve para modificar algo dentro da classe.

  private set saldo(saldoconta: number) {
    this.saldoconta = saldoconta;
  }

  protected deposito(valor: number) {
    if (valor < 0) return console.log("Valor inválido.");
    this.saldo += valor;
  }
  protected saque(valor: number) {
    if (valor < 0) return console.log("Valor inválido.");
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log(`Saldo da conta insuficiente. Saldo: R$${this.saldo}`);
    }
  }
}

interface Tributos {
  baseCalculo: number;
  calcularTrib(valor: number): number;
}

class ContaPF extends Conta implements Tributos {
  baseCalculo = 10;
  cpf: number;
  constructor(titular: string, cpf: number) {
    super(titular);
    this.cpf = cpf;
    console.log(`Conta PF criada: ${this.titular}`);
  }

  calcularTrib(valor: number): number {
    return valor * this.baseCalculo;
  }

  info(): void {
    console.log(`Tipo de conta: PF`);
    super.info();
    console.log(`CPF: ${this.cpf}`);
    console.log("------------------------");
  }

  public deposito(valor: number) {
    if (valor > 1000) {
      console.log(`Valor de deposito superior ao limite do tipo de conta`);
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 1000)
      console.log(`Valor de saque superior ao limite do tipo de conta`);
    else super.saque(valor);
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(titular: string, cnpj: number) {
    super(titular);
    this.cnpj = cnpj;
    console.log(`Conta PJ criada: ${this.titular}`);
  }

  info(): void {
    console.log(`Tipo de conta: PJ`);
    super.info();
    console.log(`CNPJ: ${this.cnpj}`);
    console.log("------------------------");
  }

  public deposito(valor: number) {
    if (valor < 1000) {
      console.log(`Valor de deposito inferior ao limite do tipo de conta`);
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 1000)
      console.log(`Valor de saque superior ao limite do tipo de conta`);
    else super.saque(valor);
  }
}

const cont1 = new ContaPF("Renan", 312321123 - 25);
const cont2 = new ContaPJ("Empresa", 333444555 - 12);

// console.log(cont1.titular);
// console.log(cont1.numero);
// console.log(cont2.titular);
// console.log(cont2.numero);
// cont1.info();
// cont2.info();
cont1.deposito(500);
cont1.saque(499.99);
// cont1.saque(1001);
console.log(
  cont1.saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
