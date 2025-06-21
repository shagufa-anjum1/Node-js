const express = require('express');
const app = express();

// Logging middlewares
app.use((req, res, next) => {
  console.log('came from first middleware', req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log('came from second middleware', req.url, req.method);
  next();
});

// Route handlers
app.get('/', (req, res, next) => {
  console.log('came from get method', req.url, req.method);
  res.send('Welcome to Shagufa Anjum Channel');
});

app.get('/contact-us', (req, res, next) => {
  console.log('came from Contact method', req.url, req.method);
  res.send(`
    <h1>Welcome to Contact Us Page</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required>
      <input type="submit" value="Submit"/>
    </form>
  `);
});

app.post('/contact-us', (req, res, next) => {
  console.log('came from post method', req.url, req.method);
  res.send('Thank you for contacting us');
});

// 404 handler for unmatched routes
app.use((req, res, next) => {
  console.log('404 middleware hit', req.url, req.method);
  res.status(404).send('Page Not Found - Shagufa Anjum Channel');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000', `http://localhost:3000`);
});
