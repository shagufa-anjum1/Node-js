const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/home'){
    return res.write('<h1>Wlcome to Home</h1>');
  } else if(req.url === '/men'){

     return res.write('<h1>Welcome to Men Section!</h1>');
  }else if(req.url === '/women')
  {
     return res.write('<h1>Welcome to Women Section!  </h1>')
  }else if(req.url === '/kids')
  {
    return res.write('<h1>WElcome to Kids Section </h1>')
  }else if(req.url === '/cart')
  {
    return res.write('<h1>Check out the cart Section </h1>')
  }

  res.write(`
    <html>
      <head>
        <title>Myntra</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/home">HOME</a></li>
              <li><a href="/men">MEN</a></li>
              <li><a href="/women">WOMEN</a></li>
              <li><a href="/kids">KIDS</a></li>
              <li><a href="/cart">CART</a></li>
            </ul>
          </nav>
        </header>
      </body>
    </html>
  `);

  res.end(); // ✅ Important: close the response!
});

server.listen(3000, () => {
  console.log('Server running on address http://localhost:3000');
});
