const router = require('express').Router();

const fs = require('fs');
const { nextTick } = require('process');

//todo DISPLAY THE INDEX.HTML
router.get("/", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const storedNotes = JSON.parse(data)
      res.json(storedNotes);
    }
  })
});

//TODO DISPLAY NOTES.HTML
router.get("./notes", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const notes = JSON.parse(data)
      res.json(notes);
    }
  })
});

//todo CREATE POST ROUTE FOR /api/notes
router.post("/", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const newNote = req.body.id;
      const notes = JSON.parse(data)
      //*need to add id to delete
      notes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(notes, null, "\t"), (err) => {
        if (err) {
          res.json(err)
        } else {
          res.json(notes);
        }
      })
    }
  })
});


//todo BONUS: create DELETE POST for /api/notes/:id
//* must READ THE DATA FROM THE ARRAY IN DB.JSON, DELETE BY ID THERE, THEN RETURN THE RESULTS
router.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  //todo if req.params.id is TRUTHY, then read the db.json and parse it into a variable. then need a for loop of some kind
  //todo go thru the index of notes data and if params.id === id of note, then SPLICE out that id
  //todo then STRINGIFY the data back to the db.json
 
});

module.exports = router;



