// Configurações iniciais e iniciação do servidor
//require("dotenv").config();

const bodyParser = require('body-parser')
//const db = require("./app/models/index");
const express = require('express')
const app = express()

const { User } = require('./app/models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Criar um usuário, usando um comando do model que o Sequelize disponibiliza
//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.post('/register', async (req, res) => {
    const user = await User.creat(req.body)
    res.json(user)
})

app.get('/find/:id', (req, res) => {
    res.json('Im in register')
})

app.get('/findall', (req, res) => {
    res.json('Im in find all')
})

app.put('/update/:id', (req, res) => {
    res.json('Im in update')
})

app.delete('/delete/:id', (req, res) =>{
    res.send('Im in delete')
})

app.listen(3000)
/*
const port = process.env.PORT;
db.sequelize.sync().then(() => {
  console.log("Conectado ao banco de dados");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
*/