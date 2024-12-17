const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const app = express()
app.use(express.json())
const port = 3000

let db = undefined;

const startServer  = async () => {
    try {
        
        const client = new MongoClient("mongodb://localhost:27017")
        await client.connect()
        console.log('🟢 Connected Successfully to MongoDB');

        app.listen(port, () => {
            console.log(`Starting To DO Server`)
        })

        db = client.db('tododb')
        // db.createCollection('tasks')
    } catch (error) {
        console.log(`🔴 Error in Starting Server`)
        console.error(error)
        process.exit(1)
    }
}

app.post('/create', async (req, res) => {
    const taskObj = req.body // read the body from request data
    console.log(taskObj)

    await db.collection('tasks').insertOne(taskObj)
    res.json({ sts : 'success', msg: 'Task Created Successfully' })
})

app.get('/tasks', async (req, res) => {
    // returning all tasks as an array
    const tasks = await db.collection('tasks').find({}).toArray()
    res.json({ sts : 'success', tasks })
})

app.delete('/delete/:taskId',async (req, res) => {

    const { taskId } = req.params

    const query = { _id: new ObjectId(taskId) }

    await db.collection('tasks').deleteOne(query)

    res.json({ sts:'success', msg : `Delete Task id ${taskId}`})
})

startServer()