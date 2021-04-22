const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// bringing the environment variables
dotenv.config({ path: './config/config.env'});

const app = express();

connectDB();

//middleware for req.body
app.use(express.json({ extended: false }))

// defining routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/techs', require('./routes/techs'));

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 6000;

app.listen( PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));