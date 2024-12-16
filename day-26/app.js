const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

const startServer  = async () => {
    try {
        
        app.listen(port, () => {
            console.log(`Starting To DO Server`)
        })
    } catch (error) {
        console.log(`🔴 Error in Starting Server`)
        console.error(error)
        process.exit(1)
    }
}

app.post('/create', (req, res) => {
    const taskObj = req.body // read the body from request data
    console.log(taskObj)

    res.json({ sts : 'success', msg: 'Task Created Successfully' })
})

app.get('/tasks', (req, res) => {
    // returning all tasks as an array
    res.json({ sts : 'success', tasks : [ { id: 1, task: 'Shopping', description: 'New Headphone for training', sts: false}] })
})

app.delete('/delete/:taskId', (req, res) => {
    // read taskId, from url.
    res.json({ sts:'success', msg : 'Delete Task id '})
})

startServer()