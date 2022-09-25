const router = require('express').Router();

const fs = require('fs');

//todo DISPLAY THE INDEX.HTML
router.get("/", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err,data)=>{
    if(err){
      res.json(err);
    } else{
      const index = JSON.parse(data)
      res.json(index);
    }
  })
});


//TODO DISPLAY NOTES.HTML
router.get("/notes", async (req, res) => {

  fs.readFile("./db/db.json", "utf8", (err,data)=> {
    if(err){
      res.json(err);
    } else{
      const notes = JSON.parse(data)
      res.json(notes);
    }
  })
});

//todo CREATE POST ROUTE FOR /api/notes




//todo BONUS: create DELETE POST for /api/notes/:id

