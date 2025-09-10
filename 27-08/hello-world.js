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
