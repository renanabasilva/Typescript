class Computador {
  private id:number;
  public nome: string;
  private ram: number;
  private cpu: number;
  protected ligado: boolean;

  constructor(nome:string, ram:number, cpu:number){
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
    this.id = 0;
  }

  info():void{
    console.log(`Nome  : ${this.nome}`);
    console.log(`Ram   : ${this.ram}`);
    console.log(`CPU   : ${this.cpu}`);
    console.log(`Ligado: ${this.ligado? "Sim" : "Não"}`);
    console.log('--------------------');
  }

  ligar():void{
    this.ligado = true;
  }

  desligar():void{
    this.ligado = false;
  }

  upRam(qtde:number):void{
    if(qtde >=0 && qtde <= 1000)
      this.ram = qtde;
    else
      console.log(`Quantidade ${qtde} para o ${this.nome} não é permitido.`)
  }
}

const comp1 = new Computador("Computador 01", 64, 10);
const comp2 = new Computador("Computador 02", 32, 5);
const comp3 = new Computador("Computador 03", 128, 10);

comp1.ligar();
comp3.ligar();
comp1.desligar();
comp1.upRam(-100);

comp1.info();
comp2.info();
comp3.info();


// Para que algum método ou propriedade não seja acessado fora da classe, é necessário alterar seu modificador de acesso utilizando private.
// Ao não definir o modificador de acesso, ele será public.
// O atributo do tipo protected não pode ser alterado fora da classe, porém pode ser alterado por herança.
// O atributo do tipo private pode ser alterado apenas dentro da própria classe.