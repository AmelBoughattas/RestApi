const express = require('express')
const app =express();

//routes
app.use(express.json())
app.use('/user', require('./Router/userRouter'))

//create database with server
require('dotenv').config({path: './config/.env'})


//connect database
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI, 
         {useNewUrlParser: true, useUnifiedTopology: true,
        }).then (res=>console.log('database connected'))
        .catch((err)=>console.log(err))
    
//connect server
const port = process.env.port || 5000;
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server is running port", port)
})
