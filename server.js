import express from 'express';
import chalk from 'chalk';
import { routes } from './routes/routes.js';

import "./bootstrap/app.js";

const app = express();

// Middleware para parsear JSON - deve vir antes das rotas
app.use(express.json());

// Inicializar rotas
app.use("/api", routes);

// Middleware para tratar rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).send('Not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando em: http://localhost:${port}`));
});
