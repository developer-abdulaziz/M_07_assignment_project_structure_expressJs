// Require express
const express = require('express');

// Make app object
const app = new express;

//Import Router
const router = require('./src/routes/api');




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
