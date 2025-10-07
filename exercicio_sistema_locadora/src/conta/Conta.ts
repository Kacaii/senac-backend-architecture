import Cliente from "../cliente/Cliente.ts";
import Filme from "../filme/Filme.ts";
import Locacao from "../locacao/Locacao.ts";

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

  // ** Cria uma transação e realiza o pagamento */
  locarFilmes(filmes: Array<Filme>): Locacao {
    if (filmes.length == 0)
      return new Locacao({ data: new Date(), listaFilmes: [] });

    const locacao = new Locacao({ data: new Date(), listaFilmes: filmes });
    return locacao;
  }

  extratoHistorico(): string {
    const header = `.:: Histórico de locações de ${this.cliente.nome}::\n`;
    return header.concat(
      this.historicoLocacao.reduce((a, b) => {
        return a.concat(JSON.stringify(b, null, 2));
      }, ""),
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
