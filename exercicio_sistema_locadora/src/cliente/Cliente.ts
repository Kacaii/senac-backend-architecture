export default class Cliente {
  readonly nome: string;
  readonly cpf: string;
  readonly endereco: string;
  readonly telefone: string;

  constructor(opt: ClienteOpts) {
    this.nome = opt.nome;
    this.cpf = opt.cpf;
    this.endereco = opt.endereco;
    this.telefone = opt.telefone;
  }
}

type ClienteOpts = {
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
};
