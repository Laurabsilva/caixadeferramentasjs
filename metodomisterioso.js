// MÉTODO MISTERIOSO - toLocaleString()
 
const preco = 1234.5;
 
// Antes 
console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // R$ 1.234,50
 
// Depois
console.log(preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // $1,234.5