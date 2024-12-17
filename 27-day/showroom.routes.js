const express = require('express')

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
    res.json({'sts' : 'success', msg: 'These are the showroom details'})
})

module.exports = router