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