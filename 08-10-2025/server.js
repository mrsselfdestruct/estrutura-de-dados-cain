const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const setorRoutes = require('./routes/setorRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/setores', setorRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
