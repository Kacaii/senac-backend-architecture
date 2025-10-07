import * as assert from "@std/assert";
import { Cliente, Conta, Filme } from "./locadora/index.ts";

Deno.test("exercicio_sistema_locadora", async (t) => {
  const pedro = new Conta({
    numero: 0,
    cliente: new Cliente({
      cpf: "000000000-00",
      endereco: "Rua das ruas, 000",
      nome: "Pedro",
      telefone: "(81) 9 0000-0000",
    }),
  });

  await t.step("Criando nova conta", () => {
    assert.assertEquals(
      pedro.visualizar_saldo(),
      250,
      "Saldo inicial deve ser igual a 250",
    );
  });

  const carrinho_pedro = pedro.locarFilmes([
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
  ]);

  await t.step("Locando filmes", () => {
    assert.assertArrayIncludes(
      carrinho_pedro.listaFilmes,
      [
        // Filme 1 --------
        new Filme({
          valorLocacao: 17,
          ano: 1984,
          genero: "terror",
          titulo: "Pânico",
        }),
        // Filme 2 --------
        new Filme({
          valorLocacao: 16,
          ano: 2017,
          genero: "terror",
          titulo: "Corra!",
        }),
      ],
      "Filmes deve ser incluídos no carrinho",
    );
  });

  await t.step("Valor é retirado da conta corretamente", () => {
    pedro.pagarDebito(carrinho_pedro);
    assert.assertEquals(pedro.visualizar_saldo(), 250 - 33);
  });

  await t.step("Locação deve registrada no histórico", () => {
    assert.assertArrayIncludes(pedro.historicoLocacao, [carrinho_pedro]);
  });
});
