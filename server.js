
const db = require('./db.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


db.sync({ force: false })
  .then(() => {
    app.listen(PORT, console.log('Server is running on port: ' + PORT));
  }); 