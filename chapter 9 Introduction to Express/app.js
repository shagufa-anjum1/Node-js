// Core Modules

const http = require('http');

//External Modules

const express =  require('express');


// local Modules

const requestHandler = require('./user');

 const app = express();


const server = http.createServer(app);

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



