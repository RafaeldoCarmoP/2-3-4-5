let a = 0, b = 1, num = parseInt(prompt("Digite um número: "));
let pertence = false;

while (a <= num) {
  if (a === num) {
    pertence = true;
    break;
  }
  let temp = a;
  a = b;
  b = temp + b;
}

console.log(pertence ? "Pertence à sequência de Fibonacci" : "Não pertence à sequência de Fibonacci");