// core Modules
const path = require('path');

// external Modules 

const express = require('express');

const hostRouter = express.Router();

// local Modules
const rootDir = require('../utills/pathUtills');


hostRouter.get('/host/add-home', (req, res, next) => {

  res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
});

hostRouter.post('/host/add-home', (req, res, next) =>{

 res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
} )



module.exports = hostRouter;

