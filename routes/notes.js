const notes = require('express').Router();

//* variable to hold middleware that assigns unique ID to our notes
const { v4: uuidv4 } = require('uuid');

//* from /helpers/fsUtils.js
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils.js');

//* GET route for fetching the front page
notes.get('/', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) =>
      res.json(JSON.parse(data))
    );
});


//* GET route for fetching NOTES
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) =>
      res.json(JSON.parse(data))
    );
});

//* POST route to add a new note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

//* DELETE route to delete notes by their associated ID (created in POST route with uuidv4)
notes.delete('/:id', (req, res, id) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      //* Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((notes) => notes.id !== noteId);

      //* Save that array to the filesystem
      writeToFile('./db/db.json', result);

      //* Respond to the DELETE request
      res.json(`Item ${id} has been deleted 🗑️`);
    });
});

module.exports = notes;
