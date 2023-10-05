const express = require("express")
const menu = require("./db.json")

const app = express()

app.get("/items", (req, res) => {
    const date = new Date()

    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${res.statusCode}`)

    res.json(menu.items)
})

app.post("/add", (req, res) => {
    console.log(req)
    console.log("TESTE")
})

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000\n\nhttp://localhost:8000")
})