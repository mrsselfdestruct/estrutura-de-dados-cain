const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro valor: ', (v1) => {
  console.log(`Você digitou: ${v1}`);

  rl.question('Digite o segundo valor: ', (v2) => {
    console.log(`O resultado da multiplicação será: ${parseInt(v1) * parseInt(v2)}`);

    rl.close();
  });
});

rl.on('close', () => {
  console.log('Vai te embora vagabundo!');
  process.exit(0);
});
