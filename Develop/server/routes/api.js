const router= require('express').Router()

const {getNotes, createNotes} = require('../utils/notes.js')

router.get('/notes', (req, res)=>{
res.json(getNotes())
})


router.post('/notes', (req, res)=>{
    res.json(createNotes(req.body))
})

module.exports = router