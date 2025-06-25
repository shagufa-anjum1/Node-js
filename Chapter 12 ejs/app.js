// core Modules
 const path = require('path');

// external modules
const express = require('express');

//local modules
const userRouter = require('./routes/userRouter'); 
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utills/pathUtills');


const app = express();

app.use((req, res, next ) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


app.use((req, res, next) =>{
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use('/user', userRouter );
app.use('/host', hostRouter);



app.get('/', (req, res , next) => {
  console.log(req.url, req.method);
  res.send(`
    <h1>Welcome to Airbnb</h1>
    <a href="/add-home">Add Home</a>
  `);
});


 


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
