const router= require('express').Router()

const {getNotes, createNotes, deleteNote} = require('../utils/notes.js')

router.get('/notes', (req, res)=>{
res.json(getNotes())
})


router.post('/notes', (req, res)=>{
    res.json(createNotes(req.body))
})

router.delete('/notes/:id', (req, res)=>{
    res.json(deleteNote(req.params.id))
})


module.exports = router