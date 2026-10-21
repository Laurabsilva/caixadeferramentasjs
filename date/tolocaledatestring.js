 // ---------- toLocaleDateString() ----------
const data = new Date(2026, 9, 18);
 
// Antes
console.log(data.toLocaleDateString('pt-BR')); // 18/10/2026
 
// Depois 
console.log('toLocaleDateString - depois:', data.toLocaleDateString('en-US')); // 10/18/2026