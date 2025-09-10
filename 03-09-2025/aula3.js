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
  rl.question('How old are you? ', (age) => {
    console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old.`);

    // Fecha interface quando terminar
    rl.close();
  });
});

// Quando o aplicativo é fechado
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
