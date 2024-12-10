const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => { // HTTP GET method
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) // it creates the server which accepts incoming requests

// http is request and response model, 
// there should be someone who accepts the request, 
// this express server will handle the requests.