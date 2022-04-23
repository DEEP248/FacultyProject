const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const mongoose = require('./db.js');
const adminRoutes = require('../server/Routes/admin-routes.js');
const facultyRoutes = require('../server/Routes/faculty-routes.js');

const app = express();

app.use(bodyParser.json());

app.use(cors({origin : 'http://localhost:4200'}));

const port = process.env.PORT || 3000;
const App = app.listen(port,() => {
    console.log('connected to port ' + port)
})

// app.listen(3000, ()=> console.log('Server started on port 3000'));

app.use('/admin',adminRoutes);
app.use('/faculty',facultyRoutes);

app.use('/public', express.static('public'))