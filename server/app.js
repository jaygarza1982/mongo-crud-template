var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

(async () => {
    try {
        var mongoose = require('mongoose');

        const { MONGO_URL } = process.env;

        console.log('Attempting to connect to Mongo on', MONGO_URL);
        await mongoose.connect(MONGO_URL);

        console.log('Connected to Mongo successfully.');
    } catch (error) {
        console.log(error);
    }
})();

var devicesRouter = require('./routes/devices');
var itemsRouter = require('./routes/items');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));

app.use('/api/devices', devicesRouter);
app.use('/api/items', itemsRouter);
app.use('/api/users', usersRouter);

module.exports = app;
