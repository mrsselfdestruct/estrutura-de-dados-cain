const readline = require('readline');

// Cria interface para input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faz uma pergunta, responde depois
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

// Segue para próxima pergunta
