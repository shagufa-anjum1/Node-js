const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }

const server = http.createServer((req, res) => {
   console.log(req.url, req.method, req.headers);

   if(req.url === '/'){
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Welcome to our Website !</h1></body>');
   res.write('</html>');
   res.end();
   return res.end();
   } else if(req.url === '/products'){
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Checkout your Products! </h1></body>');
   res.write('</html>');
   res.end();
   return res.end();
   }
   else{
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Subscribe Shagufa Anjum Channel!</h1></body>');
   res.write('</html>');
   res.end();
   return res.end();
   }

   
   
 });

 const PORT = 3001;

 server.listen(PORT, ()=> {

  console.log(`Server running on address http://localhost:${PORT}`);

 });