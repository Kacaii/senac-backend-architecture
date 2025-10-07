type FilmeOpt = {
  titulo: string;
  ano: number;
  genero: GeneroFilme;
  valorLocacao: number;
};

type GeneroFilme =
  | "terror"
  | "romance"
  | "faroeste"
  | "ação"
  | "drama"
  | "comédia";

export default class Filme {
  readonly titulo: string;
  readonly ano: number;
  readonly genero: GeneroFilme;
  readonly valorLocacao: number;

  constructor(opt: FilmeOpt) {
    this.titulo = opt.titulo;
    this.ano = opt.ano;
    this.genero = opt.genero;
    this.valorLocacao = opt.valorLocacao;
  }
}
