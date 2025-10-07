import Cliente from "../cliente/Cliente.ts";
import Locacao from "../locacao/Locacao.ts";

export default class Conta {
  readonly cliente: Cliente;
  readonly numero: number;
  readonly saldoDevedor: number;
  readonly historicoLocacao: Array<Locacao>;

  constructor(opt: ContaOpts) {
    this.cliente = opt.cliente;
    this.numero = opt.numero;
    this.saldoDevedor = 0;
    this.historicoLocacao = [];
  }
}

type ContaOpts = {
  cliente: Cliente;
  numero: number;
};
