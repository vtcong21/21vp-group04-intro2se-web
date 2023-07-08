const express = require('express');
const bodyParser = require('body-parser');
const tourCardRoutes = require('./routes/tourCardRoutes');
const tourRoutes = require('./routes/tourRoutes');
const connectDatabase = require('./config/database');
const path = require('path');
const ejs = require('ejs');

// Load env var
require('dotenv').config();
const port = process.env.PORT;

// Create express app
const app = express();

// Connect to dbs
connectDatabase();

// View engine setting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/tourCards', tourCardRoutes);
app.use('/tours', tourRoutes);

//này t test thử thôi, còn routes nhớ chia đàng hoàng
// app.use('/home', (req, res)=>{
//   res.render('home');
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
