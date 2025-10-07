import Filme from "../filme/Filme.ts";

type LocacaoOpts = {
  data: Date;
  listaFilmes: Array<Filme>;
};

export default class Locacao {
  readonly data: Date;
  readonly valorTotalAPagar: number;
  readonly listaFilmes: Array<Filme>;

  constructor(opt: LocacaoOpts) {
    this.data = opt.data;
    this.listaFilmes = opt.listaFilmes;
    this.valorTotalAPagar = opt.listaFilmes.reduce((acc, b: Filme) => {
      return acc + b.valorLocacao;
    }, 0);
  }
}
