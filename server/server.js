const express = require('express');
const app = express();
const path = require('path')

/* GLOBAL HANDLERS */
app.use(express.json());



//if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });


app.listen(3000);