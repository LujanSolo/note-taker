const express = require('express');
const path = require('path');

const api = require('./routes');

router.use(api);

// const app = express();
const router = require('express').Router();
const PORT = process.env.PORT || 3001;

//* Middleware for parsing JSON and url encoded form data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use('/api', api)
router.use(express.static("'public"))

//* GET route for the homepage
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//* GET route for notes page
router.get("/notes", function (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

router.listen(PORT, () => 
  console.log(`Server now running at http://localhost:${PORT} 🚀`)
);