const express = require('express')

const app = express()
const port = 3000

app.use(express.json()) // middleware 

 // CREATE: POST - http://localhost:3000/create
app.post('/create', (req, res) => {
    // when you hit above url, this function body gets executed

    res.json({
        sts: 'success',
        msg : 'post method invoked successfully'
    })
})

// READ: GET - http://localhost:3000/read
app.get('/read', (req, res) => {
    return res.json({ sts: 'success', msg :'Communication Check Successful' })
}) 

// UPDATE: PUT - http://localhost:3000/update
app.put('/update',(req, res) => {

}) 

// DELETE: DELETE - http://localhost:3000/delete
app.delete('/delete', (req, res) => {

}) 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})