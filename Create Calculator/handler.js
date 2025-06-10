const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
 console.log(req.url, req.method);
 if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write(`
     <html>
     <head><title>Practise Set</title></head>
     <body>
     <h1>Welcome to Calculator </h1>
     <a href ="/calculator"> Go To Calculator</a>
     </body>
     
     </html>
    `);
   return res.end();
 } else if(req.url.toLowerCase() === "/calculator"){
   res.write(`
      <html>
      <head>
        <title>Practise set</title>
      </head>

      <body>
      <h1>Here is a Calculator</h1>
      <form action ="/calculator-result" method = "POST" >
      <input  type ="text" placeholder ="First Name" name ="first" />
      <input  type ="text" placeholder ="Second Name" name ="second" />
      <input type ="submit" value="Sum" />
      </form>
      
      </body>
      </html>
      `)
 } else if(req.url.toLowerCase() === "/calculator-result" && req.method === "POST") {

    return sumRequestHandler(req, res);


 }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
     <html>
     <head><title>Practise Set</title></head>
     <body>
     <h1>``404 Page Does not Exist</h1>
     <a href ="/calculator"> Go To Home</a>
     </body>
     
     </html>
    `);
   return res.end();
}

exports.requestHandler = requestHandler;