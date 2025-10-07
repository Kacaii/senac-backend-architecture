import Filme from "../filme/Filme.ts";

export default class Locacao {
  readonly data: Date;
  readonly valorTotalAPagar: number;
  readonly listaFilmes: Array<Filme>;

  constructor(opt: LocacaoOpts) {
    this.data = opt.data;
    this.valorTotalAPagar = 0;
    this.listaFilmes = [];
  }
}

type LocacaoOpts = {
  data: Date;
};
