// FS Biblioteca ler e escrever arquivos
const fs = require('fs');
const path = require('path');
const Setor = require('../models/setor');

const arquivo = path.join(__dirname, '../data/setores.json');

function lerSetores() {
  if (!fs.existsSync(arquivo)) return [];
  return JSON.parse(fs.readFileSync(arquivo));
}

function salvarSetores(setores) {
  fs.writeFileSync(arquivo, JSON.stringify(setores, null, 2));
}

// Executar com Get
exports.listar = (req, res) => {
  const setores = lerSetores();
  res.json(setores);
};

exports.criar = (req, res) => {
  try {
    const setores = lerSetores();
    const { nome, descricao } = req.body;
    const id = setores.length + 1;
    const novo = new Setor(id, nome, descricao);
    setores.push(novo);
    salvarSetores(setores);
    res.status(201).json(novo);
  } catch (erro) {
    res.status(500).json({ erro: "Falha ao criar setor." });
  }
};

exports.atualizar = (req, res) => {
  const setores = lerSetores();
  const id = parseInt(req.params.id);
  const setor = setores.find(s => s.id === id);
  if (!setor) return res.status(404).json({ erro: "Setor não encontrado." });

  setor.nome = req.body.nome;
  setor.descricao = req.body.descricao;
  salvarSetores(setores);
  res.json(setor);
};

exports.deletar = (req, res) => {
  let setores = lerSetores();
  const id = parseInt(req.params.id);
  setores = setores.filter(s => s.id !== id);
  salvarSetores(setores);
  res.json({ mensagem: "Setor excluído com sucesso." });
};
