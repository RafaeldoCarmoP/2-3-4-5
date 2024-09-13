let faturamentos = [1000, 2000, 0, 3000, 0, 5000, 6000, 0, 0, 4000, 10000, 0, 500, 700, 9000, 12000, 0, 800, 300, 0, 0, 200, 7000, 0, 6000, 0, 500, 0, 0, 15000];
let filtrados = faturamentos.filter(f => f > 0);
let menor = Math.min(...filtrados);
let maior = Math.max(...filtrados);
let media = filtrados.reduce((soma, f) => soma + f, 0) / filtrados.length;
let acimaMedia = filtrados.filter(f => f > media).length;

console.log(`Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${acimaMedia}`);