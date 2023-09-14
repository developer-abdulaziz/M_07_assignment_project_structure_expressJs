// Require express
const express = require('express');

// Make app object
const app = new express;

//Import Router
const router = require('./src/routes/api');



// npm i nodemon express body-parser cookie-parser multer jsonwebtoken mysql mongoose dotenv cors express-mongo-sanitize express-rate-limit helmet hpp validator

//All security Middleware Import
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');


// Security Middleware Implement
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());


// Requset Security Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,

});


// Apply the Security rate limiting middleware to all requests
app.use(limiter);


// Create Api router paths
app.use('/api',router);


//Home page Route
app.get('/',(req, res) =>{
    res.status(200).json({status:"success", data:"This is my home page create"})
})

//Undefine route
app.get('*',(req,res)=>{
    res.status(404).json({
        status:"Error",
        message: "Route not found"
    })
})

// Export app module
module.exports = app;
