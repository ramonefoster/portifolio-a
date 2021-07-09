const express = require('express');
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/index', (req, res) => {
    res.render('index')
})





module.exports = router