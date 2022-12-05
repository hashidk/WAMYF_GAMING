
const express = require("express")
const app = express()

require('dotenv').config()

app.get("/lacasita", function(req, res) {
    res.status(200).send("Hola mundo")
})

app.use(express.static('public'))

app.listen(process.env.PORT, function () {
    console.log("Servidor abierto en: "+process.env.URL+":"+process.env.PORT);
})