const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const me = new MyEmitter()
me.on('abc', (dt) => {
    console.log(`Event Triggered`)
    console.log(dt)
})

me.emit('abc', 'hey Hi how are you')