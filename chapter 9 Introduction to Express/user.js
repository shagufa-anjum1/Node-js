const http = require('http');
const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form></body></html>');
    res.end();
  } else if (req.url === '/submit-details' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log('Form Data:', parsedBody);
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>Form Submitted!</h1></body></html>');
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>404 - Not Found</h1></body></html>');
    res.end();
  }
};

const server = http.createServer(userRequestHandler);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
