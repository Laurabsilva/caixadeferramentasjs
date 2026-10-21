// ---------- JSON.stringify() ----------

// Antes
const aluno = { nome: 'Ana', idade: 16 };
const texto = JSON.stringify(aluno);
console.log('JSON.stringify - antes:', texto); // {"nome":"Ana","idade":16}
 
// Depois 
const alunoo = { nome: 'Ana', idade: '16' };
const textoo = JSON.stringify(alunoo);
console.log(textoo); // {"nome":"Ana","idade":"16"}