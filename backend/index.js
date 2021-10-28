//****************************************************************************
// the requirements
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser')
const cors = require('cors')
const holidayRouter = require('./routers/holidayRouter')
require('dotenv').config();


//****************************************************************************
// create the web app
const app = express();


//****************************************************************************
// use embedded js
// app.set('view engine', 'ejs');


//****************************************************************************
// the public folder is default. if you need more, add more...
app.use(express.static('public'));
// app.use(express.static('uploads'));


//****************************************************************************
// some more middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


//****************************************************************************
const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('Database is connected');
    app.listen(port, () => {
        console.log('listening at port', port);
    });
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', holidayRouter)