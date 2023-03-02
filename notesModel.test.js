/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe('NotesModel', () => {
  it('constructs with an empty array', () => {
    const notemodel = new NotesModel;
    expect(notemodel.notes).toEqual([]);
  });

  it('can add a note', () => {
    const notemodel = new NotesModel;
    notemodel.addNote('Buy Milk');
    expect(notemodel.getNotes()).toEqual(['Buy Milk']);
  });

  it('can add multiple notes', () => {
    const notemodel = new NotesModel;
    notemodel.addNote('Buy Milk');
    notemodel.addNote('Go to the Gym');
    expect(notemodel.getNotes()).toEqual(['Buy Milk', 'Go to the Gym']);
  });

  it('resets list of notes to empty', () => {
    const notemodel = new NotesModel;
    notemodel.addNote('Buy Milk');
    notemodel.addNote('Go to the Gym');
    notemodel.reset();
    expect(notemodel.getNotes()).toEqual([]);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'Test note';
  
    // 2. Click the button
    const button = document.querySelector('#add-notes-button');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Test note');
  });
})