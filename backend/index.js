import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/christof", (req, res) => {
    res.send("<h1>Veränderung!</h1><p>Die Veränderung wurde angenommen</p>")
})

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000")
})