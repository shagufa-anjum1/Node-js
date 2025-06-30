// external module

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Middleware function executed', req.url, req.method);;
  next();
});


app.use((req, res, next) => {
  console.log('Second middleware function executed', req.url, req.method);
  next();
});

app.get('/', (req, res, next) => {
  console.log('Handling / for GET request', req.url, req.method);
  res.send(`<h1>Welcome to the Home Page</h1>`);
});

app.get('/contact-us', (req, res, next) => {
  console.log('Handling /contact-us for GET request', req.url, req.method);
  res.send(`
    
    <h1> please give your details here</h1>
    <form action="/contact-us" method="POST">
    name: <input type="text" name="name" placeholder="Your Name"><br>
    email: <input type="email" name="email" placeholder="Your Email"><br>
    phone: <input type="tel" name="phone" placeholder="Your Phone"><br>
    message: <textarea name="message" placeholder="Your Message"></textarea><br>
    <button type="submit">Send</button> 
    </form>

    `);
});

app.post('/contact-us', (req, res, next) => {
  console.log('Handling /contact-us for POST request', req.url, req.method);
  res.send(`
    <h1>Thank you for contacting us!</h1>
    <p>We will get back to you soon.</p>
  `);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// To run the server, use the command: node app.js
// To test the contact form, you can use a tool like Postman or a web browser to access http://localhost:3000/contact-us
// You can also use curl command in terminal: curl -X POST http://localhost:3000/contact-us -d "name=John&email=john@example.com&phone=1234567890&message=Hello"    