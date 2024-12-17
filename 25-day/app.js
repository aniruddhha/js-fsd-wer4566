const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000



const startServer = async () => {
    try {
        // Connect to MongoDB
        const client = new MongoClient('mongodb://localhost:27017')
        await client.connect();
        console.log('🟢 Connected Successfully to MongoDB');

        // Initialize the database object
        db = client.db('cardb');

        // Start the server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error('🔴 Error connecting to database:', error);
        process.exit(1); // Exit the process on failure
    }
}

let db = undefined;

app.use(express.json()) // middleware 

 // CREATE: POST - http://localhost:3000/create
app.post('/create', (req, res) => {
    // when you hit above url, this function body gets executed

    res.json({
        sts: 'success',
        msg : 'POST method invoked successfully'
    })
})

// READ: GET - http://localhost:3000/read
app.get('/read', async (req, res) => {

    try {
        // console.log(await db)
        const cars = await db.collection('cars').find({}).toArray()
        
        console.log(cars)

        res.json({ 
            sts: 'success', 
            msg :'GET method invoked successfully',
            cars
        })
    } catch(e) {
        console.log(e)
        res.status(500).json({ sts: 'error', msg: 'Failed to fetch documents', e });
    }
}) 

// UPDATE: PUT - http://localhost:3000/update
app.put('/update',(req, res) => {
    res.json({
        sts: 'success',
        msg : 'PUT method invoked successfully'
    })
}) 

// DELETE: DELETE - http://localhost:3000/delete
app.delete('/delete', (req, res) => {
    res.json({
        sts: 'success',
        msg : 'DELETE method invoked successfully'
    })
}) 

startServer()