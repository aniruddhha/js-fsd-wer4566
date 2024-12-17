const express = require('express')

const router = express.Router() // what is router
router.use(express.json()) // what is middleware 

router.get('/', (req, res) => {
    res.json({ sts: 'success', cars: [ { id: 1, make :'abc', model: 'aaa', name:'qqq' } ] })
})

module.exports = router