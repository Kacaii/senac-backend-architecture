import { green } from "jsr:@std/internal@^1.0.12/styles";
import Cliente from "./Cliente.ts";
import Filme from "./Filme.ts";
import Locacao from "./Locacao.ts";

type ContaOpts = {
  cliente: Cliente;
  numero: number;
};

export default class Conta {
  readonly cliente: Cliente;
  readonly numero: number;
  private saldoDevedor: number;
  readonly historicoLocacao: Array<Locacao>;

  constructor(opt: ContaOpts) {
    this.cliente = opt.cliente;
    this.numero = opt.numero;
    this.saldoDevedor = 250;
    this.historicoLocacao = [];
  }

  locarFilmes(filmes: Array<Filme>): Locacao {
    if (filmes.length == 0)
      return new Locacao({ data: new Date(), listaFilmes: [] });

    const locacao = new Locacao({ data: new Date(), listaFilmes: filmes });
    return locacao;
  }

  extratoHistorico(): string {
    const header =
      "\x1b[32m" +
      `.:: Histórico de locações de ${this.cliente.nome}::.` +
      "\x1b[39m" +
      "\n";

    return header.concat(
      this.historicoLocacao
        .reduce((acc, locacao) => {
          return acc
            .concat(
              locacao.data.toString(),
              "\t",
              locacao.listaFilmes
                .map((filme) => {
                  return filme.titulo;
                })
                .join(", "),
            )
            .concat("\tR$ ", locacao.valorTotalAPagar.toString(), "\n");
        }, "")
        .trimEnd(),
    );
  }

  pagarDebito(locacao: Locacao): void {
    if (this.saldoDevedor == 0 || locacao.valorTotalAPagar > this.saldoDevedor)
      return;

    this.saldoDevedor -= locacao.valorTotalAPagar;
    this.historicoLocacao.unshift(locacao);

    return;
  }
}
