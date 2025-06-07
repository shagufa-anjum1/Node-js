
const fs = require('fs');

  const  requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details !</h1>');
    res.write('<form method="POST" action="/submit-details">');
    res.write('<input type="text" name="username" placeholder="Enter your name"> <br><br>');
    res.write('<label for="gender"> Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url === '/submit-details' && req.method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });
   

    req.on('end', () => {
      const  fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
        // Example: username=Shagufa&gender=female
        const params = new URLSearchParams(fullBody);
        // const bodyObject = {};
        // for(const [Key, val] of params.entries()){
        //   bodyObject[Key] = val;
        // }
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync('user.txt' , JSON.stringify(bodyObject));

      // Save the username from form data
      const username = fullBody.split('=')[1].split('&')[0];
      fs.writeFileSync('user.txt', username);

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Subscribe Shagufa Anjum Channel!</h1></body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;


