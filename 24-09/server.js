// É um framework que cria um servidor e usará as funções HTTPs.
const express = require("express");
// CORS é um pacote que providencia uma conexão express entre mais de 1 aplicação ou várias.
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // habilita CORS para acessar a API de outra porta (ex.: Live Server 5500)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Estrutura de dados em memória (apenas para fins didáticos)
let products = [];
let currentId = 1;
 
// (Opcional) Rota GET por ID, útil para testar ou buscar um item específico
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: "Produto não encontrado" });
  res.json(products);
});
 
// Listar todos os produtos
app.get("/api/products", (req, res) => {
  res.json(products);
});
 
// Criar produto
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: currentId++, name, price: parseFloat(price) };
  products.push(newProduct);
  res.json(newProduct);
});
 
// EDITAR produto (PUT)
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = products.find(p => p.id === id);
 
  if (!product) return res.status(404).json({ error: "Produto não encontrado" });
 
  // Atualiza somente os campos enviados
  if (typeof name !== "undefined") product.name = name;
  if (typeof price !== "undefined") product.price = parseFloat(price);
 
  res.json(product);
});
 
// Deletar produto
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Produto removido com sucesso" });
});
 
// Sobe o servidor
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
