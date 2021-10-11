//route to request data -- indicating folder and JSon file containing array
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');
//require() statements will read the index.js files in each of the directories indicated
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
//instantiating server code
const app = express();

// middleware to make css/js/html files available without multiple routes
app.use(express.static('public'));

// parse incoming string or array data 
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});