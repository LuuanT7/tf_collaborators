🧠 Colaborators API
Uma API REST simples para cadastro, listagem e busca de colaboradores, utilizando Node.js, PostgreSQL e Nginx com Docker.

🚀 Stack utilizada
Node.js (Express)

PostgreSQL

Nginx (como reverse proxy)

Docker e Docker Compose

📦 Subindo o projeto
Pré-requisitos
Docker

Docker Compose

Passo a passo
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/sua-api-colaboradores.git
cd sua-api-colaboradores
Copie o arquivo .env.exemplo:

bash
Copiar
Editar
cp .env.exemplo .env
Suba os containers:

bash
Copiar
Editar
docker-compose up --build
Acesse a aplicação:

API: http://localhost:8080/api/collaborators

📌 Rotas da API
➕ Criar colaborador
POST /api/collaborators/create

Body JSON:

json
Copiar
Editar
{
"name": "João Silva",
"role": "Desenvolvedor",
"can_develop": true
}
📋 Listar colaboradores
GET /api/collaborators/list

Parâmetros opcionais via query:

limit: número de registros (padrão: 10)

offset: deslocamento (padrão: 0)

field: campo para ordenação (ex: name, role)

direction: ASC ou DESC

Exemplo:

bash
Copiar
Editar
http://localhost:8080/api/collaborators/list?limit=5&field=name&direction=ASC
🔍 Buscar colaborador por ID
GET /api/collaborators/:id

## Teste a API no Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/interstellar-desert-954549/workspace/unifaat)

🐘 Banco de Dados
As credenciais e configurações do banco de dados são definidas no arquivo .env, com base no .env.exemplo.

Exemplo de variáveis:

env
Copiar
Editar
POSTGRES_HOST=postgres_aula_11_container
POSTGRES_PORT=5432
POSTGRES_USER=meu_usuario
POSTGRES_PASSWORD=minha_senha
POSTGRES_DB=collaborators

🌐 Configuração Nginx
O Nginx escuta na porta 8080 e redireciona as requisições para o servidor Node.js na porta 3000.
