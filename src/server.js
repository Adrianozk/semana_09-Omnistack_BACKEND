const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http') 

const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socketio(server)

const conectedUsers = {}


mongoose.connect('mongodb+srv://adriano:adriano@omnistack-xcgbc.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

io.on('connection', socket => {
    const { user_id } = socket.handshake.query

    conectedUsers[user_id] = socket.id
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = conectedUsers

    return next()
})

// GET, POST, PUT, DELETE

// GET: Buscar informações
// Ex. Listagem de usuários

// POST: Criar novas informações
// Ex. Cadastro de usuário

// PUT: Editar informação
// DELETE: Deletar informação

// req.query  -> Acessar query params (para filtros)
// req.params -> Acessar route params (para edição, delete)
// req.body   -> Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

server.listen(3333)