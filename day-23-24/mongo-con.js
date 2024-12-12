const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
        .then(async () =>  {
            console.log(`🟢 Connected Successfuly`)

            const car = { id : 1, name : 'Audi', color: 'white', price : '1 CR' }

            const db = client.db('cardb')

            const collection = db.collection('cars')

            try {
                const result = await collection.insertOne(car)
                console.log('🟢 Car Saved Successfully')
            } catch (error) {
                console.error('🔴 Error in Inserting')
            }
           
        })
        .catch((e) => console.log(`🔴 Error in Connection`) )
        .finally( () => client.close() )

