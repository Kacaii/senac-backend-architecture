import Cliente from "./cliente/Cliente.ts";
import Conta from "./conta/Conta.ts";
import Filme from "./filme/Filme.ts";

function main() {
  // Clientes -----------------------------------------------------------------
  const pedro = new Conta({
    numero: 0,
    cliente: new Cliente({
      cpf: "000000000-00",
      endereco: "Rua das ruas, 000",
      nome: "Pedro",
      telefone: "(81) 9 0000-0000",
    }),
  });

  const eloi = new Conta({
    numero: 1,
    cliente: new Cliente({
      cpf: "000000000-00",
      endereco: "Aldeia, 000",
      nome: "Eloi",
      telefone: "(81) 9 0000-0000",
    }),
  });

  const cliente = new Conta({
    numero: 2,
    cliente: new Cliente({
      cpf: "000000000-00",
      endereco: "Banco de dados da sua empresa",
      nome: "Drop Table da Silva",
      telefone: "(81) 9 0000-0000",
    }),
  });

  // MAIN ----------------------------------------------------------------------
  const carrinho_pedro = pedro.locarFilmes([
    new Filme({
      valorLocacao: 17,
      ano: 1984,
      genero: "terror",
      titulo: "Pânico",
    }),

    new Filme({
      valorLocacao: 8,
      ano: 1984,
      genero: "terror",
      titulo: "Shin Godzilla",
    }),
  ]);

  pedro.pagarDebito(carrinho_pedro);
  console.log(pedro.extratoHistorico());
}

if (import.meta.main) {
  main();
}
