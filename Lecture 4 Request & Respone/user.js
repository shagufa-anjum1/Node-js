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
   res.write('<body><h1>Enter Your Details !</h1>');

    res.write('<form>');
    res.write('<input type="text" name="username" placeholder="Enter your name" > <br><br>');
    res.write('<label for="gender"> Gender:</label>');
    res.write('<input type="radio" id = "male", name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type = "radio" id="female" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
   
   res.write('</html>');
   res.end();
   return res.end();
   } 
   
   
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Subscribe Shagufa Anjum Channel!</h1></body>');
   res.write('</html>');
   res.end();
   return res.end();
   

   
   
 });

 const PORT = 3001;

 server.listen(PORT, ()=> {

  console.log(`Server running on address http://localhost:${PORT}`);

 });