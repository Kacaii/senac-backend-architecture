export default class Filme {
  readonly titulo: string;
  readonly ano: number;
  readonly genero: string;
  readonly valorLocacao: number;

  constructor(opt: FilmeOpt) {
    this.titulo = opt.titulo;
    this.ano = opt.ano;
    this.genero = opt.genero;
    this.valorLocacao = opt.valorLocacao;
  }
}

type FilmeOpt = {
  titulo: string;
  ano: number;
  genero: string;
  valorLocacao: number;
};
