const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../helpers/fsUtils');

//* GET route for fetching the INDEX
notes.get("/", (req, res) => {
  readFromFile('./db/db.json')
  .then((data) =>
  res.json(JSON.parse(data))
  );
 
  
//* GET route for fetching NOTES
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json')
  .then(data) =>
  res.json(JSON.parse(data))
});

//* GET route to get notes by a specific ID
notes.get('/:id', (req, res) => {
  const prevNote = req.params.id;
  readFromFile('./db/db.json')
  .then ((data) => JSON.parse(data))
  .then ((json) => {
    const result = json.filter((note) => note.id === id);
    return result.length > 0
    ? res.json(result)
    : res.json('No note with that ID');
  });
});



//todo CREATE POST ROUTE FOR /api/notes
notes.post('/', (req, res) => {
  console.log(req.body);

  const { note } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfullly`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;



