// ---------- Object.keys() ----------

// Antes
const aluno = { nome: 'Laura', idade: 16 };
console.log(Object.keys(aluno)); // [ 'nome', 'idade' ]
 
// Depois 
const alunoo = { nome: 'Laura', idade: 16, curso: 'DS' };
console.log(Object.keys(alunoo)); // [ 'nome', 'idade', 'curso' ]
 
