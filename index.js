// console.log('The notes app is running');
// const NotesModel = require('./notesModel')


// let notemodel = new NotesModel;
// notemodel.addNote('Buy Milk');
// notemodel.addNote('Go to the Gym');

// console.log(notemodel.getNotes());

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");


const model = new NotesModel();
model.addNote('This is an example note')

const view = new NotesView(model);

view.displayNotes();