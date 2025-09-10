// node - - version: Checar versão do Node.js, caso esteja instalado
// npm init (-y): Commando para iniciar um projeto Node.js.
// Ctrl + C: Parar a execução do Node.
// cd.. : Voltar atrás uma pasta.
// dir: Ver a pasta e os arquivos dentro da pasta.
// node (arquivo).js: Executa o arquivo.

console.log("Iniciando projeto")
const { createServer } = require('node:http'); // biblioteca do node.
const fs = require('fs');
console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8'); // escaneia arquivo criado dentro da pasta.
console.log('2. File contents:', data); // data é o que está dentro do arquivo criado (citado acima).
console.log('3. Done reading file');

const hostname = '127.0.0.1'; // variável para definir endereço.
const port = 3000; // porta da aplicação.

const server = createServer((req, res) => { // req -> Requisição, res -> Resposta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

---------------------------------------------------------------------------------
  
function myFunction(p1, p2) {
  return p1 * p2;
}

console.log("O valor é:", myFunction(2,3))
// Cria uma função para calcular a divisão e imprimir no console.

// *: Multiplicação | / : Divisão
