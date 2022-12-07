
const express = require("express")
const app = express()

require('dotenv').config()

app.get("/lacasita", function(req, res) {
    res.status(200).send("Hola mundo GET")
})


app.put("/lacasita", function(req, res) {
    res.status(200).send("Hola mundo PUT")
})


app.get("/politecnica", function(req, res) {
    res.status(200).send("ESCUELA POLITECNICA NACIONAL")
})

app.get("/hola", function(req, res) {
    res.status(200).send("HOLA")
})

app.get("/prueba", function(req, res) {
    res.status(200).send("PRUEBA")
})

app.use(express.static('public'))

app.listen(process.env.PORT, function () {
    console.log("Servidor abierto en: "+process.env.URL+":"+process.env.PORT);
})