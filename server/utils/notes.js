//two functions, one to create the notes and function to get the note
const fs= require('fs');
const {v4: uuid}= require('uuid');
const path= require('path');

//get notes from db
function getNotes() {
    let parsed = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'))
    //console.log(parsed.notes);  
    return parsed.notes
}

// add notes from front and push it to db and write it
function createNotes(newNote){
    let notes = JSON.parse( fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8')).notes
    const {title, text} = newNote
    console.log(title, text)
    const newNote1 = {title, text, id: uuid()}
    notes.push(newNote1)
return fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify({notes}, null,2),'utf8')

}

function deleteNote(id){
    let existingNotes= JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
    ).notes;
    const notes = existingNotes.filter(note=>note.id!==id);
    return fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2),
      "utf8"
    );
}

module.exports = {getNotes, createNotes, deleteNote}