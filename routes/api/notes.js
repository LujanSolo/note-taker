const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../../helpers/fsUtils');

//todo DISPLAY THE INDEX.HTML
notes.get("/", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const storedNotes = JSON.parse(data);
      res.json(storedNotes);
    }
  })
});

//TODO DISPLAY NOTES.HTML
notes.get("./notes", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const notes = JSON.parse(data);
      res.json(notes);
    }
  })
});

//todo CREATE POST ROUTE FOR /api/notes
notes.post("/", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const newNote = req.body;
      const notes = JSON.parse(data);
      //*need to add id to delete
      notes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(notes, null, 4), (err) =>
        err ? console.error(err) : console: info(`\nData written to ${"./db/db.json"}`)
        } else {

    }
  })
}
);

// //todo BONUS: create DELETE POST for /api/notes/:id
// //* must READ THE DATA FROM THE ARRAY IN DB.JSON, DELETE BY ID THERE, THEN RETURN THE RESULTS
// notes.delete('/api/notes/:id', (req, res) => {
//   const id = req.params.id;
//   //todo if req.params.id is TRUTHY, then read the db.json and parse it into a variable. then need a for loop of some kind
//   //todo go thru the index of notes data and if params.id === id of note, then SPLICE out that id
//   //todo then STRINGIFY the data back to the db.json

// });

module.exports = notes;



