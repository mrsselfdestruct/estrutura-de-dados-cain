const express = require("express");
// CORS é um pacote que providencia uma conexão express entre mais de 1 aplicação ou várias.
const cors = require("cors");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    // Função para listar tudo do banco
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
