const express = require('express')
const app = express()

const carRouter = require('./car.routes')
const showRoomRouter = require('./showroom.routes')

app.use((req, res, next) => { // middleware 
    next()
}, (req, res, next) => { // middleware 
    next()
})

const cleanReqMiddleware = (req, res, nex) => {
    next()
}

app.use(cleanReqMiddleware)

app.use('/car', carRouter)
app.use('/showroom', showRoomRouter)

app.listen(3000, () => {
    console.log(`Express Server Started ✅`)
})