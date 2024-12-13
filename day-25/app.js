const express = require('express')

const app = express()

const port = 3000


app.post('/', (req, res) => {}) // CREATE
app.get('/', (req, res) => {}) // READ
app.put('/',(req, res) => {}) // UPDATE
app.delete('/', (req, res) => {}) // DELETE



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})