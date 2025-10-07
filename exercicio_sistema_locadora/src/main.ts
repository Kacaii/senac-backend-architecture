import { Cliente, Conta, Filme } from "./locadora/index.ts";

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
      endereco: "Outra rua das ruas, 000",
      nome: "Eloi",
      telefone: "(81) 9 0000-0000",
    }),
  });

  // const cliente = new Conta({
  //   numero: 2,
  //   cliente: new Cliente({
  //     cpf: "000000000-00",
  //     endereco: "Banco de dados da sua empresa",
  //     nome: "Drop Table da Silva",
  //     telefone: "(81) 9 0000-0000",
  //   }),
  // });

  // MAIN ----------------------------------------------------------------------

  // Primeiro carrinho
  let carrinho_pedro = pedro.locarFilmes([
    new Filme({
      valorLocacao: 17,
      ano: 1984,
      genero: "terror",
      titulo: "Pânico",
    }),

    new Filme({
      valorLocacao: 16,
      ano: 2017,
      genero: "terror",
      titulo: "Corra!",
    }),

    new Filme({
      valorLocacao: 15,
      ano: 1973,
      genero: "terror",
      titulo: "O Exorcista",
    }),
  ]);

  // Primeiro pagamento
  pedro.pagarDebito(carrinho_pedro);

  // Segundo carrinho ----------------
  carrinho_pedro = pedro.locarFilmes([
    new Filme({
      valorLocacao: 15,
      ano: 1973,
      genero: "terror",
      titulo: "O Exorcista",
    }),

    new Filme({
      valorLocacao: 14,
      ano: 2022,
      genero: "terror",
      titulo: "Sorria",
    }),

    new Filme({
      valorLocacao: 16,
      ano: 2017,
      genero: "terror",
      titulo: "Corra!",
    }),
  ]);

  // Segundo pagamento
  pedro.pagarDebito(carrinho_pedro);

  // Terceiro carrinho ---------------
  carrinho_pedro = pedro.locarFilmes([
    new Filme({
      valorLocacao: 11,
      ano: 2004,
      genero: "terror",
      titulo: "O Chamado",
    }),

    new Filme({
      valorLocacao: 8,
      ano: 2016,
      genero: "terror",
      titulo: "Shin Godzilla",
    }),
  ]);

  // Terceiro pagamento
  pedro.pagarDebito(carrinho_pedro);

  // Quarto carrinho -----------------
  carrinho_pedro = pedro.locarFilmes([
    new Filme({
      valorLocacao: 13,
      ano: 2013,
      genero: "terror",
      titulo: "Invocação do Mal",
    }),

    new Filme({
      valorLocacao: 17,
      ano: 1984,
      genero: "terror",
      titulo: "Pânico",
    }),
  ]);

  // Quarto pagamento
  pedro.pagarDebito(carrinho_pedro);

  // Primeiro carrinho -----------------
  let carrinho_eloi = eloi.locarFilmes([
    new Filme({
      valorLocacao: 12,
      ano: 1978,
      genero: "terror",
      titulo: "Halloween",
    }),

    new Filme({
      valorLocacao: 9,
      ano: 2007,
      genero: "terror",
      titulo: "Atividade Paranormal",
    }),
  ]);

  // Primeiro pagamento
  eloi.pagarDebito(carrinho_eloi);

  // Segundo carrinho --------------
  carrinho_eloi = eloi.locarFilmes([
    new Filme({
      valorLocacao: 15,
      ano: 1973,
      genero: "terror",
      titulo: "O Exorcista",
    }),

    new Filme({
      valorLocacao: 8,
      ano: 2016,
      genero: "terror",
      titulo: "Shin Godzilla",
    }),
  ]);

  // Segundo pagamento
  eloi.pagarDebito(carrinho_eloi);

  // TOTAL
  console.log(pedro.extratoHistorico());
  console.log(eloi.extratoHistorico());

  console.log("-".repeat(Deno.consoleSize().columns));
  prompt("\x1b[32m" + "  > ENTER" + "\x1b[39m");
}

if (import.meta.main) {
  main();
}
