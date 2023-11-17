class Conta {
  // Public pode ser acessado de qualquer lugar.
  public numero: number;
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

  public saldo(): number {
    return parseFloat(this.saldoconta.toFixed(2));
    // return this.saldoconta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  protected deposito(valor: number) {
    if (valor < 0) return console.log("Valor inválido.");
    this.saldoconta += valor;
  }
  protected saque(valor: number) {
    if (valor < 0) return console.log("Valor inválido.");
    if (valor <= this.saldoconta) {
      this.saldoconta -= valor;
    } else {
      console.log(`Saldo da conta insuficiente. Saldo: R$${this.saldo()}`);
    }
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(titular: string, cpf: number) {
    super(titular);
    this.cpf = cpf;
    console.log(`Conta PF criada: ${this.titular}`);
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
  cont1.saldo().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
