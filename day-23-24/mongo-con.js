const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
        .then(() => console.log(`🟢 Connected Successfuly`))
        .catch((e) => console.log(`🔴 Error in Connection`) )

