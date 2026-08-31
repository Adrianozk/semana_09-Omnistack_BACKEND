# AirCnC Backend — Semana OmniStack 9

Backend do projeto desenvolvido durante a Semana OmniStack 9, da Rocketseat. A aplicação simula uma plataforma de reserva de espaços de trabalho, conectando empresas que disponibilizam *spots* a pessoas interessadas em reservá-los.

> **Contexto:** repositório de estudo criado em 2019. As dependências e decisões técnicas refletem o conteúdo da edição do curso e não representam uma aplicação de produção atual.

## Funcionalidades

- Criação de sessão por e-mail
- Cadastro de espaços com imagem, tecnologias e valor da diária
- Listagem de espaços por tecnologia
- Dashboard dos espaços cadastrados por um usuário
- Solicitação de reservas
- Aprovação ou rejeição de reservas
- Notificações em tempo real com Socket.IO
- Upload e disponibilização de imagens com Multer

## Tecnologias

- Node.js
- Express
- MongoDB e Mongoose
- Socket.IO
- Multer
- Yarn

## Repositórios relacionados

- [Frontend web](https://github.com/Adrianozk/semana_09-Omnistack_FRONTEND)
- [Aplicativo mobile](https://github.com/Adrianozk/semana_09-Omnistack_MOBILE)

## Configuração

### 1. Instale as dependências

```bash
yarn install
```

### 2. Configure a conexão com o MongoDB

A API exige a variável de ambiente `MONGODB_URI`. O arquivo `.env.example` documenta o formato esperado, mas o projeto não carrega arquivos `.env` automaticamente.

Linux ou macOS:

```bash
export MONGODB_URI="mongodb+srv://usuario:senha@cluster/banco"
```

PowerShell:

```powershell
$env:MONGODB_URI="mongodb+srv://usuario:senha@cluster/banco"
```

Nunca salve uma credencial real no código ou em arquivos versionados.

### 3. Inicie o servidor

```bash
yarn dev
```

A API será executada em `http://localhost:3333`.

## Rotas principais

| Método | Rota | Finalidade |
| --- | --- | --- |
| `POST` | `/sessions` | Criar ou recuperar usuário por e-mail |
| `GET` | `/spots` | Listar espaços filtrados por tecnologia |
| `POST` | `/spots` | Cadastrar um espaço |
| `GET` | `/dashboard` | Listar espaços do usuário |
| `POST` | `/spots/:spot_id/bookings` | Solicitar reserva |
| `POST` | `/bookings/:booking_id/approvals` | Aprovar reserva |
| `POST` | `/bookings/:booking_id/rejections` | Rejeitar reserva |

## Estrutura

```text
src/
├── config/       # configuração de uploads
├── controllers/  # regras das rotas
├── models/       # modelos do MongoDB
├── routes.js     # definição dos endpoints
└── server.js     # inicialização da API e do Socket.IO
```

Arquivos enviados para `uploads/`, dependências em `node_modules/` e credenciais locais não devem ser versionados.
