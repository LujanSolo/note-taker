const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html')
  )
});

router.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

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
router.get("/", async (req, res) => {

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
      const newNote = req.body;
      const notes = JSON.parse(data)
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
router.delete('/:id', (req, res) => {
  Note.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedNote) => {
      res.json(deletedNote);
    })
    .catch((err) => res.json(err));
});

module.exports = router;



