// Core Modules

const http = require('http');

//External Modules

const express =  require('express');


// local Modules

const requestHandler = require('./user');

 const app = express();

 app.use((res, req, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next(); // Call next middleware
  // If you don't call next(), the request will hang
 });

 app.use((res, req, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<h1>Hello from Express</h1>"); // Send a response
  // If you don't send a response, the request will hang
 });



const server = http.createServer(app);

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



