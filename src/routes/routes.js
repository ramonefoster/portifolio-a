const express = require('express');
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/index', (req, res) => {
    res.render('index')
})

router.get('/profile', (req, res) => {
    res.render('profile')
})

router.get('/teste', (req, res) => {
    res.render('teste')
})

module.exports = router