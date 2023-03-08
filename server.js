// importando bibliotecas
const express = require("express")  // serve para criar um servidor local (npm i express)
const path = require("path") // lida com caminhos de arquivos
const port = 3333;

let initialPath = path.join(__dirname, "Public") // variável que concatena o diretório atual (__dirname) com a pasta "Public" criada

let app = express() // instancia da aplicação do servidor
app.use(express.static(initialPath)) // app usa um servidor estático contino na pasta public (initalPath)

app.get("/", (req, res) => { // definindo porta de entrada
    res.sendFile(path.join(initialPath, "index.html")) // quando o servidor for chamado, envia uma resposta com o arquivo "index.html" contido em "public" 
}) 

app.listen(port, () => { // iniciar o servidor na porta 3333
    console.log(`Server start up on port ${port}!`)
})

