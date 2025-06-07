const http = require('http');
const userRequestHandler = require( './Parsing');

const server = http.createServer();

const PORT = 3000;

server.listen(PORT, () => {

  console.log(` Server running on address http://localhost:${PORT}`);


} );