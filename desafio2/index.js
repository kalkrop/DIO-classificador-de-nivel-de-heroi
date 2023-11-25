function calcularSaldo(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Define o nível do jogador
  let nivel;
  switch (true) {
    case saldoVitorias <= 10:
      nivel = "Ferro";
      break;
    case saldoVitorias > 10 && saldoVitorias <= 20:
      nivel = "Bronze";
      break;
    case saldoVitorias > 20 && saldoVitorias <= 50:
      nivel = "Prata";
      break;
    case saldoVitorias > 50 && saldoVitorias <= 80:
      nivel = "Ouro";
      break;
    case saldoVitorias > 80 && saldoVitorias <= 90:
      nivel = "Diamante";
      break;
    case saldoVitorias > 90 && saldoVitorias <= 100:
      nivel = "Lendário";
      break;
    default:
      nivel = "Imortal";
  }

  // Retorna o saldo de vitórias e o nível do jogador
  return [saldoVitorias, nivel];
}

// Entrada de dados
// const vitorias = prompt("Quantas vitórias você tem?");
const vitorias = 101
// const derrotas = prompt("Quantas derrotas você tem?");
const derrotas = 0

// Chamada da função
const [saldoVitorias, nivel] = calcularSaldo(vitorias, derrotas);

// Saída dos dados
console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
