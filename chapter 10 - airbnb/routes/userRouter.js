// core Modules 

const path = require('path');


// external module
const express = require('express');
const userRouter = express.Router();

// local Modules

const rootDir = require('../utills/pathUtills');


// Middleware to log request details
userRouter.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});


module.exports = userRouter;